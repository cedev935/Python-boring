/*
The MIT License
Copyright (c) 2014 Ilkka Seppälä

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


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
	/*
	In this function, a part of file will be downloaded.
	I used wg *sync.WaitGroup because when download a file,
	this function will be ran in many goroutines at the same time
	to download different part of a complete file.
	The `rangeStart`and `rangeEnd` decide what part of the file will
	be downloaded(this function use HTTP header `Range: bytes=startByte-endByte`
	`maxRetryTimes` is important. When downloading big files,
	many requests will be send and some will be failed.
	`maxRetryTimes` decides how many times will the function retry
	if it's failed to send a request. We suggest you to set it
	from 4 to 10. When you start more thread, more `maxRetryTimes` is needed.
	*/
	wg.Add(1)
	defer wg.Done()
	/*
	Here we set `timeout`, it is important.
	If time-out, a request will be failed, and
	download will be termiated so it's important
	to set `timeout` properly.
	We suggest you to set `timeout` according to
	your target delay. For example, your target
	delay is 200ms, we suggest you to set `timeout`
	to 2 * time.Second or more. It will be nothing
	too bad if you set it bigger but it will be fatal
	if you set it too low, so we suggest you to set it
	bigger.
	*/
	timeout := time.Duration(5 * time.Second)
	httpClient := &http.Client{
		Timeout: timeout,
	}
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	rangeStartString := intToString(rangeStart)
	rangeEndString := intToString(rangeEnd)
	req.Header.Add("Range", "bytes=" + rangeStartString + "-" + rangeEndString)
	// req.Header.Add("", "")
	// req.Header.Add("User-Agent", "")
	// req.Header.Add("Referer", "")
 	// req.Header.Add("Cookie", "")
 	// req.Header.Add("Cookie", "")
	/*
	Sometimes more header need to be add
	to download file properly,
	add them by
	req.Header.Add(string, string)
	*/
	resp, err := httpClient.Do(req)
	defer resp.Body.Close()
	if err != nil {
		for i:=1;i<(maxRetryTimes + 1);i++ {
			// If the request failed, retry and leave message.
			log.Println("[ERROR] Can't send the request. Retrying for", normalIntToString(i), "time(s). RangeID:", intToString(rangeStart))
			resp, err = httpClient.Do(req)
			if err == nil {
				break
			}
		}
		if err != nil {
			// If failed and try for more times than `maxRetryTimes`,
			// program will be force terminate.
			log.Println("[FATAL] Out of retrying times.")
			os.Exit(2)
		}
	}
	// Here we create a file with a name
	// of `fileSavingPath`
	// The part of the file will be storaged in this file.
	f, err := os.Create(fileSavingPath)
	defer f.Close()
	if err != nil {
		log.Println(err.Error())
		return err
	}
	// Here we copy the response to the file.
	io.Copy(f, resp.Body)
	return nil
}

func sizeOfTheHttpFile(url string) (size int64, err error) {
	/*
	This function is used to get the size of a file,
	to decide how big will a part be.
	*/
	httpClient := &http.Client{}
	req, err := http.NewRequest("HEAD", url, nil)
	// req.Header.Add("", "")
	// req.Header.Add("User-Agent", "")
	// req.Header.Add("Referer", "")
 	// req.Header.Add("Cookie", "")
 	// req.Header.Add("Cookie", "")
	/*
	Sometimes more header need to be add
	to download file properly,
	add them by
	req.Header.Add(string, string)
	*/
	if err != nil {
		return 0, err
	}
	resp, err := httpClient.Do(req)
	defer resp.Body.Close()
	if err != nil {
		return 0, err
	}
	fileLength := resp.ContentLength
	return fileLength, nil
}

func downloadFullFile(url, saveName string, threadNum int64, maxRetryTimes int) error {
	/*
	In this function, whole file will be downloaded.
	`maxRetryTimes` will be used as the description
	of the function `downloadFilePart`(Because we pass the
	`maxRetryTimes` to it :) )
	`threadNum` will decide how big is a part be.
	*/
	
	// Here we created a folder with a name of
	// the file. All parts will be storged in it.
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
	everyPartFileLength := fileLength / threadNum // To get how big a part be.
	var hasDownloadedSize int64
	var wg sync.WaitGroup
	// Here we start the first goroutine first.
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
	/*
	This function is used to merge two part file to one(the
	first one). It will be used to merge all downloaded
	part file in the function `mergeDownloadFiles`
	*/
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
	/*
	This function is used to merge all parts of a file,
	to finally get a complete file.
	*/
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
	/*
	After merge all parts to a complete file. Parts need to
	be clean. This function is used for this.
	*/
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
	
}

