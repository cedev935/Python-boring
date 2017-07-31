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
	log.Println("Running at port 5032")
	http.HandleFunc("/change", changeHandler)
	http.HandleFunc("/get", getHandler)
	http.HandleFunc("/delete", deleteHandler)
	http.ListenAndServe(":5032", nil)
}
