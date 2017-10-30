package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/levigross/grequests"
)

const VERSION = "0.2.1"

var storgedData = make(map[string]string)

func changeDataFromStorge(key, value string) {
	storgedData[key] = value
}

func deleteValueFromStorge(key string) {
	delete(storgedData, key)
}

func getDataFromStorge(key string) string {
	return storgedData[key]
}

func changeHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	key := r.Form.Get("key")
	value := r.Form.Get("value")
	changeDataFromStorge(key, value)
	w.Write([]byte("succeeded"))
	log.Println("[INFO]", "(changeHandler)", "key:", key)
}

func deleteHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	key := r.Form.Get("key")
	deleteValueFromStorge(key)
	w.Write([]byte("succeeded"))
	log.Println("[INFO]", "(deleteHandler)", "Deleted key", key)
}

func getHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	key := r.Form.Get("key")
	w.Write([]byte(getDataFromStorge(key)))
	log.Println("[INFO]", "(getHandler)", "key:", key)
}

func listHandler(w http.ResponseWriter, r *http.Request) {
	listJson, err := json.Marshal(storgedData)
	if err != nil {
		w.Write([]byte("error"))
		log.Println("[ERROR]", err.Error())
		return
	}
	w.Write([]byte(string(listJson)))
	log.Println("[INFO]", "(listHandler)")
}

func syncFromAnotherNode(nodeAPIAddr string) error {
	resp, err := grequests.Get(nodeAPIAddr+"list", nil)
	if err != nil {
		log.Println("[ERROR]", err.Error())
		return err
	}
	jsonData := resp.Bytes()
	// Convert
	err = json.Unmarshal(jsonData, &storgedData)
	if err != nil {
		log.Println("[ERROR]", err.Error())
		return err
	}
	log.Println("[INFO]", "(Sync)")
	return nil
}

func syncHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	nodeAPIAddr := r.Form.Get("apiaddr")
	err := syncFromAnotherNode(nodeAPIAddr)
	if err != nil {
		w.Write([]byte("error"))
		log.Println("[ERROR]", err.Error())
		return
	}
	w.Write([]byte("succeeded"))
	log.Println("[INFO]", "(syncHandler)")
}

func getVersionHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("storgeGo Version " + VERSION))
	log.Println("(getVersionHandler)")
}

func main() {
	log.Println("[INFO] Program started.")
	// go syncFromAnotherNode("node-api-url")
	http.HandleFunc("/change", changeHandler)
	http.HandleFunc("/get", getHandler)
	http.HandleFunc("/delete", deleteHandler)
	http.HandleFunc("/list", listHandler)
	http.HandleFunc("/version", getVersionHandler)
	http.HandleFunc("/sync", syncHandler)
	// 5032 is the default port of the program.
	// It's not safe to run this program on Internet,
	// because the program doesn't auth at all,
	// so wo suggest you to run this program in the Lan.
	// To listen in the Lan, use
	// http.ListenAndServe("<IP in LAN>:<Port>", nil)
	// Eg.: http.ListenAndServe("192.168.1.4:5032", nil)
	// Sometimes you need to listen only for your device.
	// In this case, use
	// http.ListenAndServe("127.0.0.1", nil)
	http.ListenAndServe(":5033", nil)
}
