package main

import (
	"log"
	"net/http"
)

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
	w.Write([]byte("Succeeded"))
	log.Println("[INFO]", "(changeHandler)", "key:", key)
}

func deleteHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	key := r.Form.Get("key")
	deleteValueFromStorge(key)
	w.Write([]byte("Succeeded"))
	log.Println("[INFO]", "(deleteHandler)", "Deleted key", key)
}

func getHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	key := r.Form.Get("key")
	w.Write([]byte(getDataFromStorge(key)))
	log.Println("[INFO]", "(getHandler)", "key:", key)
}

func main() {
	log.Println("[INFO] Program started.")
	http.HandleFunc("/change", changeHandler)
	http.HandleFunc("/get", getHandler)
	http.HandleFunc("/delete", deleteHandler)
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
	http.ListenAndServe(":5032", nil)
}
