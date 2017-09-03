package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/user"
	"path/filepath"

	"golang.org/x/net/context"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/drive/v3"

	"github.com/dustin/go-humanize"
	"github.com/urfave/cli"
)

const VERSION = "0.2.3"

var appConfig = AppConfig{}

type DriveFile struct {
	ID   string
	Name string
}

func getTokenFromWeb(config *oauth2.Config) *oauth2.Token {
	authURL := config.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	fmt.Printf("Go to the following link in your browser then type the "+"authorization code: \n%v\n", authURL)
	var code string
	if _, err := fmt.Scan(&code); err != nil {
		log.Fatalf("Unable to read authorization code: %v", err)
	}

	tok, err := config.Exchange(oauth2.NoContext, code)
	if err != nil {
		log.Fatalf("Unable to retrieve token from web: %v", err)

	}
	return tok
}

func getClient(ctx context.Context, config *oauth2.Config) *http.Client {
	cacheFile, err := tokenCacheFile()
	if err != nil {
		log.Fatalf("Unable to get path to cached credential file. %v", err)
	}
	tok, err := tokenFromFile(cacheFile)
	if err != nil {
		tok = getTokenFromWeb(config)
		saveToken(cacheFile, tok)
	}
	return config.Client(ctx, tok)
}

func tokenCacheFile() (string, error) {
	usr, err := user.Current()
	if err != nil {
		return "", err
	}
	tokenCacheDir := filepath.Join(usr.HomeDir, ".credentials")
	os.MkdirAll(tokenCacheDir, 0700)
	return filepath.Join(tokenCacheDir,
		url.QueryEscape("gdrive-proxy-credential.json")), err
}

func tokenFromFile(file string) (*oauth2.Token, error) {
	f, err := os.Open(file)
	if err != nil {
		return nil, err
	}
	t := &oauth2.Token{}
	err = json.NewDecoder(f).Decode(t)
	defer f.Close()
	return t, err
}

func saveToken(file string, token *oauth2.Token) {
	fmt.Printf("Saving credential file to: %s\n", file)
	f, err := os.OpenFile(file, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0600)
	if err != nil {
		log.Fatalf("Unable to cache oauth token: %v", err)
	}
	defer f.Close()
	json.NewEncoder(f).Encode(token)
}

var DriveConfig *oauth2.Config

func getConfig(configPath string) (config *oauth2.Config, err error) {
	if DriveConfig == nil {
		b, err := ioutil.ReadFile(configPath)
		if err != nil {
			return nil, err
		}
		config, err := google.ConfigFromJSON(b, drive.DriveReadonlyScope)
		if err != nil {
			return nil, err
		}
		DriveConfig = config
	}
	return DriveConfig, nil
}

func streamHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	r.ParseForm()
	fileID := r.Form.Get("id")
	driveFile := &DriveFile{
		ID: fileID,
	}
	config, err := getConfig(appConfig.clientSecretFile)
	if err != nil {
		log.Println("[ERROR]", err.Error())
		fmt.Fprintf(w, "Error: %v", err)
		return
	}
	client := getClient(ctx, config)
	srv, err := drive.New(client)
	if err != nil {
		log.Println("[ERROR]", err.Error())
	}
	respName, err := srv.Files.Get(driveFile.ID).Do()
	if err != nil {
		log.Println("[ERROR]", err.Error())
		fmt.Fprintf(w, "Error: %v", err)
		return
	}
	driveFile.Name = respName.Name
	respStream, err := srv.Files.Get(driveFile.ID).Download()
	if err != nil {
		log.Println("[ERROR]", err.Error())
		fmt.Fprintf(w, "Error: %v", err)
		return
	}
	w.Header().Add("Content-Disposition", "inline; filename=\""+driveFile.Name+"\"")
	w.Header().Add("Content-Length", respStream.Header.Get("Content-Length"))
	io.Copy(w, respStream.Body)
}

func listFilesHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	config, err := getConfig(appConfig.clientSecretFile)
	if err != nil {
		log.Println("[ERROR]", err.Error())
		fmt.Fprintf(w, "Error: %v", err)
		return
	}
	client := getClient(ctx, config)
	srv, err := drive.New(client)
	filesListReq, err := srv.Files.List().Fields("files(id, name, size, shared)").Do()
	filesList := filesListReq.Files
	if err != nil {
		log.Println("[ERROR]", err.Error())
		fmt.Fprintf(w, "Error: %v", err)
		return
	}
	fmt.Fprintf(w, "<!DOCTYPE html>\n")
	fmt.Fprintf(w, "<title>Download Files</title>\n")
	fmt.Fprintf(w, "<h1>Download Files</h1>\n")
	for _, file := range filesList {
		if file.Shared == false {
			continue
		}
		if file.Size == 0 {
			continue
		}
		fmt.Fprintf(w, "%v %v <a href='http://%v:7788/download?id=%v'>Download</a><br />\n", file.Name, humanize.Bytes(uint64(file.Size)), appConfig.serverDomain, file.Id)
	}
}

func main() {
	// Init app
	myApp := cli.NewApp()
	myApp.Name = "gdrive-proxy"
	myApp.Version = VERSION
	myApp.Usage = "Transit Google Drives' files stream"
	myApp.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "listen, l",
			Value: ":7788",
			Usage: "gdrive-proxy listen address",
		},
		cli.StringFlag{
			Name:  "server-domain, d",
			Usage: "the domain you use to access this program",
			Value: "127.0.0.1",
		},
		cli.StringFlag{
			Name:  "client-secret-file, s",
			Value: "client_secret.json",
			Usage: "oauth2 client secret",
		},
		cli.BoolFlag{
			Name:  "no-list-handler",
			Usage: "disable list handler",
		},
		cli.BoolFlag{
			Name:  "reset-credential",
			Usage: "reset user credential",
		},
		cli.StringFlag{
			Name:  "config, c",
			Value: "",
			Usage: "config from json file, will override the command from shell",
		},
	}
	myApp.Action = func(c *cli.Context) error {
		appConfig.listenAddr = c.String("listen")
		appConfig.serverDomain = c.String("server-domain")
		appConfig.clientSecretFile = c.String("client-secret-file")
		appConfig.noListHandler = c.Bool("no-list-handler")
		appConfig.resetCredential = c.Bool("reset-credential")

		if c.String("config") != "" {
			err := parseJSONConfig(&appConfig, c.String("config"))
			if err != nil {
				log.Fatalf("[FATAL] %v", err)
			}
		}

		log.Println("[INFO] Program started.")
		http.HandleFunc("/download", streamHandler)
		if appConfig.noListHandler != true {
			http.HandleFunc("/list", listFilesHandler)
		}
		if appConfig.resetCredential == true {
			credentialPath, err := tokenCacheFile()
			if err != nil {
				log.Fatalf("[FATAL] %v", err)
			}
			err = os.Remove(credentialPath)
			if err != nil {
				log.Fatalf("[FATAL] %v", err)
			}
		}
		http.ListenAndServe(appConfig.listenAddr, nil)
		return nil
	}
	myApp.Run(os.Args)
}
