package main

import (
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func checkArgs() {
	if len(os.Args) != 2 {
		log.Fatal("Usage: ", os.Args[0], " <beta/stable>")
	}
	if os.Args[1] != "beta" && os.Args[1] != "stable" {
		log.Fatal("Usage: ", os.Args[0], " <beta/stable>")
	}
}

func normalCheck(err error) {
	if err != nil {
		log.Fatal("[ERROR]", err.Error())
	}
}

func httpGet(url string) (string, error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}
	return string(body), err
}

func writeFile(filepth, url string) (int64, error) {
	urf, err := http.Get(url)
	f, err := os.Create(filepth)
	if err != nil {
		log.Println("[ERROR] Can't create file. Maybe it was already exists.")
	}
	defer f.Close()
	i, err := io.Copy(f, urf.Body)
	return i, err
}

func main() {
	checkArgs()
	log.Println("[INFO] Pass args check")
	release_stable, err := httpGet("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-stable")
	normalCheck(err)
	release_beta, err := httpGet("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-beta")
	normalCheck(err)
	log.Println("Release stable:", release_stable)
	log.Println("Release beta:", release_beta)
	log.Println("[INFO] Will download version", os.Args[1])
	switch os.Args[1] {
	case "beta":
		content, err := httpGet("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-beta-link")
		content = string([]byte(content)[:len(content)-1])
		log.Println("[INFO] URL:", content)
		normalCheck(err)
		i, err := writeFile("arch-install-guide-beta.doc", content)
		normalCheck(err)
		log.Println("[INFO] Download successfully")
		log.Println("[INFO] Write", i, "bytes")
	case "stable":
		content, err := httpGet("https://raw.githubusercontent.com/redapple0204/my-boring-python/master/tmp/version-stable-link")
		content = string([]byte(content)[:len(content)-1])
		log.Println("[INFO] URL:", content)
		normalCheck(err)
		i, err := writeFile("arch-install-guide-stable.doc", content)
		normalCheck(err)
		log.Println("[INFO] Download successfully")
		log.Println("[INFO] Write", i, "bytes")
	}
	log.Println("[INFO] Finish, check the dir.")

}
