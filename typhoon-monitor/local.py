import urllib.request,os,time,re,os,easygui
data = urllib.request.urlopen('https://tieba.baidu.com/f?kw=%E5%8F%B0%E9%A3%8E&ie=utf-8&tab=good').read()
change = data.decode('utf-8') 
pattern = re.compile('【讨论[台|低][风|压]】.*')
typhoon = re.findall(pattern, change)
while True:	
	data2 = urllib.request.urlopen('https://tieba.baidu.com/f?kw=%E5%8F%B0%E9%A3%8E&ie=utf-8&tab=good').read()
	change2 = data2.decode('utf-8') 
	pattern2 = re.compile('【讨论[台|低][风|压]】.*')
	typhoon2 = re.findall(pattern, change2)
	
	if typhoon == typhoon2:
		print("no")
		time.sleep(1000)
	else:
		easygui.msgbox("may be there is a typhoon")
		data = urllib.request.urlopen('https://tieba.baidu.com/f?kw=%E5%8F%B0%E9%A3%8E&ie=utf-8&tab=good').read()
		change = data.decode('utf-8') 
		pattern = re.compile('【讨论[台|低][风|压]】.*')
		typhoon = re.findall(pattern, change)
		time.sleep(1000)
		
