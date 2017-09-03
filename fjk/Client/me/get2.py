import urllib.request,os,time,re
while True:	
	response = urllib.request.urlopen('http://192.168.1.101:8080/search.txt')
	html = response.read().decode('gb2312')

	if "192.168.1.103" in html:
		os.system('decidet.exe')
	else:
		os.system('decidef.exe')
	time.sleep(3)