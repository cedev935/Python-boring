import urllib.request,os,time,re,os,datetime
data = urllib.request.urlopen('http://tieba.baidu.com/p/5550849484').read()
change = data.decode('utf-8') 
pattern = re.compile('<li class="l_reply_num" style="margin-left:8px" ><span class="red" style="margin-right:3px">.*')
typhoon = re.findall(pattern, change)
while True:
	data2 = urllib.request.urlopen('http://tieba.baidu.com/p/5550849484').read()
	change2 = data2.decode('utf-8') 
	pattern2 = re.compile('<li class="l_reply_num" style="margin-left:8px" ><span class="red" style="margin-right:3px">.*')
	typhoon2 = re.findall(pattern2, change2)

	if typhoon == typhoon2:
		print("same")
		time.sleep(5)
	else:
		time_new = str(datetime.date.today())
		time_small = time.strftime("%H:%M:%S")
		time_all = time_new+time_small
		print(time_all)
		os.system("wget -O "+time_all+" "+"http://tieba.baidu.com/p/5550849484")
		data = urllib.request.urlopen('http://tieba.baidu.com/p/5550849484').read()
		change = data.decode('utf-8') 
		pattern = re.compile('<li class="l_reply_num" style="margin-left:8px" ><span class="red" style="margin-right:3px">.*')
		typhoon = re.findall(pattern, change)
		print("download finished")
		time.sleep(5)
