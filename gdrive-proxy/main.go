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
)

type DriveFile struct {
	ID   string
	Name string
}

func getTokenFromWeb(config *oauth2.Config) *oauth2.Token {
	authURL := config.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	fmt.Printf("Go to the following link in your browser then type the "+"authorization code: \n%v\n", authURL)
	var code string
	if _, err := fmt.Scan(&code); err != nil {
		log.Fatalf("Unable to read authorization code %v", err)
	}

	tok, err := config.Exchange(oauth2.NoContext, code)
	if err != nil {
		log.Println("Unable to retrieve token from web %v", err)

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
		url.QueryEscape("drive-go-quickstart.json")), err
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
	config, err := getConfig("client_secret.json")
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
	io.Copy(w, respStream.Body)
}

func main() {
	log.Println("[INFO] Program started.")
	http.HandleFunc("/download", streamHandler)
	http.ListenAndServe(":7788", nil)
}
