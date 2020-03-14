package main

import (
	"log"
	"net/http"
	"net/url"
	"time"
)

// PROXY Test via proxy
const PROXY = "http://127.0.0.1:1080"

// TARGETURL Test Target
const TARGETURL = "https://speed.hetzner.de/"

// TOTALTIMES Total test times
const TOTALTIMES = 20

// DURATIONTIME Duration between tests
const DURATIONTIME = time.Second

func httpHEADRequest(targetURL string, proxyURL *url.URL) error {
	speedtestTransport := &http.Transport{
		Proxy:             http.ProxyURL(proxyURL),
		DisableKeepAlives: true,
	}
	speedtestClient := &http.Client{
		Transport: speedtestTransport,
	}
	_, err := speedtestClient.Head(targetURL)
	return err
}

func singleHTTPReqTime(targetURL string, proxyURL *url.URL) (timeElapsed time.Duration, err error) {
	startTime := time.Now()
	err = httpHEADRequest(targetURL, proxyURL)
	if err != nil {
		return 0 * time.Second, err
	}
	timeElapsed = time.Since(startTime)
	return timeElapsed, err
}

func repeatHTTPReqTime(targetURL string, proxyURL *url.URL, totalTimes int, durationTime time.Duration) (timeElapsed time.Duration, err error) {
	// totalTimes should be or be greater than 1
	for i := 0; i < totalTimes; i++ {
		singleTimeElapsed, err := singleHTTPReqTime(targetURL, proxyURL)
		log.Println("[INFO] Last result:", singleTimeElapsed)
		if err != nil {
			return timeElapsed, err
		}
		timeElapsed += singleTimeElapsed
		time.Sleep(durationTime)
	}
	return timeElapsed, nil
}

func main() {
	proxyURL, _ := url.Parse(PROXY)
	timeElapsed, err := repeatHTTPReqTime(TARGETURL, proxyURL, TOTALTIMES, DURATIONTIME)
	if err != nil {
		log.Println("[ERROR] Request failed:", err)
	}
	log.Println("[INFO] Total time elapsed:", timeElapsed)
	log.Println("[INFO] Average time per request:", timeElapsed/TOTALTIMES)
}
