package main

import (
	"log"
	"net/http"
	"strconv"
	"os"
	"io"
	"sync"
	"time"
)

func normalIntToString(i int) string {
	return strconv.Itoa(i)
}

func normalStringToInt(s string) (i int, err error) {
	resultInt, err := strconv.Atoi(s)
	if err != nil {
		return 0, err
	}
	return resultInt, nil
}

func Int64ToInt(a int64) (i int, err error) {
	stringNum := intToString(a)
	resultInt, err := normalStringToInt(stringNum)
	if err != nil {
		return 0, err
	}
	return resultInt, nil
}

func intToString(i int64) string {
	return strconv.FormatInt(i, 10)
}

func stringToInt(s string) (i int64, err error) {
	resultString, err := strconv.ParseInt(s, 10, 64)
	if err != nil {
		return 0, err
	}
	return resultString, nil
}

func downloadFilePart(wg *sync.WaitGroup, rangeStart, rangeEnd int64, url, fileSavingPath string, maxRetryTimes int) error {
	wg.Add(1)
	defer wg.Done()
	timeout := time.Duration(1 * time.Second)
	httpClient := &http.Client{
		Timeout: timeout
	}
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	rangeStartString := intToString(rangeStart)
	rangeEndString := intToString(rangeEnd)
	req.Header.Add("Range", "bytes=" + rangeStartString + "-" + rangeEndString)
	req.Header.Add("User-Agent", "netdisk;5.3.4.5;PC;PC-Windows;5.1.2600;WindowsBaiduYunGuanJia")
	req.Header.Add("Referer", "http://pan.baidu.com/disk/home")
	req.Header.Add("Cookie", "BDUSS=dyVU9teWt0b2h-emliZ1Jad3RtYmUzWVF6eEhHTzBRYlJlOUZrTkZCRUl3WTlaTVFBQUFBJCQAAAAAAAAAAAEAAADE5NY9cmVkYXBwbGUwMjA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0aFkINGhZdD")
	req.Header.Add("Cookie", "pcsett=1500524481-261f8aea1e9fff0324380bd96dffb0bb")
	resp, err := httpClient.Do(req)
	if err != nil {
		for i:=1;i<(maxRetryTimes + 1);i++ {
			log.Println("[ERROR] Can't send the request. Retrying for", normalIntToString(i), "time(s). RangeID:", intToString(rangeStart))
			resp, err = httpClient.Do(req)
			if err == nil {
				break
			}
		}
		if err != nil {
			log.Println("[FATAL] Out of retrying times.")
			os.Exit(2)
		}
	}
	f, err := os.Create(fileSavingPath)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	io.Copy(f, resp.Body)
	f.Close()
	resp.Body.Close()
	return nil
}

func sizeOfTheHttpFile(url string) (size int64, err error) {
	httpClient := &http.Client{}
	req, err := http.NewRequest("HEAD", url, nil)
	req.Header.Add("Cookie", "BDUSS=dyVU9teWt0b2h-emliZ1Jad3RtYmUzWVF6eEhHTzBRYlJlOUZrTkZCRUl3WTlaTVFBQUFBJCQAAAAAAAAAAAEAAADE5NY9cmVkYXBwbGUwMjA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0aFkINGhZdD")
	req.Header.Add("Cookie", "pcsett=1500524481-261f8aea1e9fff0324380bd96dffb0bb")
	if err != nil {
		return 0, err
	}
	resp, err := httpClient.Do(req)
	if err != nil {
		return 0, err
	}
	fileLength := resp.ContentLength
	resp.Body.Close()
	return fileLength, nil
}

func downloadFullFile(url, saveName string, threadNum int64, maxRetryTimes int) error {
	os.Mkdir(saveName, os.ModePerm)
	threadNumInt, err := Int64ToInt(threadNum)
	if err != nil {
		return err
	}
	fileLength, err := sizeOfTheHttpFile(url)
	log.Println("[INFO] File Length:", intToString(fileLength))
	if err != nil {
		return err
	}
	everyPartFileLength := fileLength / threadNum
	var hasDownloadedSize int64
	var wg sync.WaitGroup
	go downloadFilePart(&wg, hasDownloadedSize, hasDownloadedSize + everyPartFileLength, url, saveName + "/" + "0", maxRetryTimes)
	hasDownloadedSize += everyPartFileLength
	var i int
	for i=1; i<(threadNumInt - 1); i++ {
		go downloadFilePart(&wg, hasDownloadedSize + 1, hasDownloadedSize + everyPartFileLength, url, saveName + "/" + normalIntToString(i), maxRetryTimes)
		hasDownloadedSize += everyPartFileLength
	}
	if hasDownloadedSize < fileLength {
		go downloadFilePart(&wg, hasDownloadedSize + 1, fileLength , url, saveName + "/" + normalIntToString(i), maxRetryTimes)
	}
	wg.Wait()
	if threadNum == 1 {
		err := os.Rename(saveName + "/" + "0", saveName)
		if err != nil {
			return err
		}
		return nil
	}
	err = mergeDownloadFiles(saveName, threadNum)
	if err != nil {
		return err
	}
	err = deleteDownloadCache(saveName, threadNum)
	if err != nil {
		return err
	}
	return nil
}

func mergeTwoPartsToFirstOne(pathFileFirst, pathFileSecond string) error {
	fileIn, err := os.OpenFile(pathFileSecond, os.O_RDWR, 0666)
	if err != nil {
		return err
	}
	defer fileIn.Close()
	fileOut, err:= os.OpenFile(pathFileFirst, os.O_APPEND, 0666)
	if err != nil {
		return err
	}
	defer fileOut.Close()
	_, err = io.Copy(fileOut, fileIn)
	if err != nil {
		return err
	}
	return nil
}

func mergeDownloadFiles(saveName string, threadNum int64) error {
	threadNumInt, err := Int64ToInt(threadNum)
	if err != nil {
		return err
	}
	for i:=1;i < threadNumInt;i++ {
		err := mergeTwoPartsToFirstOne(saveName + "/0", saveName + "/" + normalIntToString(i))
		if err != nil {
			return err
		}
	}
	os.Rename(saveName + "/0", saveName + "/" + saveName)
	return nil
}

func deleteDownloadCache(fileName string, threadNum int64) error {
	threadNumInt, err := Int64ToInt(threadNum)
	if err != nil {
		return err
	}
	for i:=1;i < threadNumInt;i++ {
		err := os.Remove(fileName + "/" + normalIntToString(i))
		if err != nil {
			return err
		}
	}
	return nil
}
	

func main() {
	log.Println("233.zip")
	err := downloadFullFile("http://pcs.baidu.com/rest/2.0/pcs/file?method=download&app_id=250528&path=%2FWin3.2_MEMDISK.7z", "236.rar", 512, 4)
	if err != nil {
		log.Println(err.Error())
		os.Exit(2)
	}
}

