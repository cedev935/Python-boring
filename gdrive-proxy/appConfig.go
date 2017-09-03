package main

import (
	"encoding/json"
	"os"
)

type AppConfig struct {
	listenAddr       string `json:"listen-address"`
	serverDomain     string `json:"server-domain"`
	clientSecretFile string `json:"client-secret-file"`
	noListHandler    bool   `json:"no-list-handler"`
	resetCredential  bool   `json:"reset-credential"`
}

func parseJSONConfig(appConfig *AppConfig, path string) error {
	file, err := os.Open(path)
	if err != nil {
		return err
	}
	defer file.Close()

	return json.NewDecoder(file).Decode(appConfig)
}
