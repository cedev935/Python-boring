package main

import (
	"io"
	"log"
	"net/http"
)

type DriveFile struct {
	ID     string
	APIUrl string
}

type AccountInfo struct {
	Access_Key string
}

func (driveFile *DriveFile) getAPIURL() {
	driveFile.APIUrl = "https://www.googleapis.com/drive/v3/files/" + driveFile.ID + "?alt=media"
}

func streamHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fileID := r.Form.Get("id")
	access_key := r.Form.Get("access_key")
	driveFile := &DriveFile{
		ID: fileID,
	}
	driveFile.getAPIURL()
	accountInfo := &AccountInfo{access_key}
	httpClient := &http.Client{}
	req, err := http.NewRequest("GET", driveFile.APIUrl, nil)
	if err != nil {
		log.Println("[ERROR]", err.Error())
		return
	}
	req.Header.Add("Authorization", "Bearer "+accountInfo.Access_Key)
	resp, err := httpClient.Do(req)
	if err != nil {
		log.Println("[ERROR]", err.Error())
		return
	}
	defer resp.Body.Close()
	io.Copy(w, resp.Body)
}

func main() {
	log.Println("[INFO] Program started.")
	http.HandleFunc("/download", streamHandler)
	http.ListenAndServe(":7788", nil)
}
