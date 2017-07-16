package main

import (
	"html/template"
	"log"
	"net/http"
	"os/exec"
)

func checkError(err error) {
	if err != nil {
		logg("ERROR", err.Error())
	}
}

func logg(logtype, logtext string) {
	log.Printf("[%s] %s", logtype, logtext)
}

func downloadFile(linkAddrAndMore string) {
	fullCmdLine := "aget -s 650 -k 130k "  + linkAddrAndMore
	cmdLine := exec.Command("sh", "-c", fullCmdLine)
	cmdLine.Run()
}

func downloadHandler(w http.ResponseWriter, r *http.Request) {
	logg("INFO", "Access downloadHandler")
	r.ParseForm()
	downloadFile(r.PostFormValue("linkAddrAndMore"))
	t, err := template.ParseFiles("submited.html")
	checkError(err)
	t.Execute(w, nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	logg("INFO", "Access indexHandler")
	t, err := template.ParseFiles("index.html")
	checkError(err)
	t.Execute(w, nil)
}

func main() {
	logg("INFO", "Program started.")
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/downloadfile", downloadHandler)
	http.ListenAndServe(":80", nil)
}
	
	