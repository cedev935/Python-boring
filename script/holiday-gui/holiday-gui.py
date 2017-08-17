import datetime,easygui,math,os,sys,time #导入模块
while True: #循环
	summer_holiday = datetime.datetime(2017, 8, 29) #暑假结束时间
	summer_holiday_start = datetime.datetime(2017, 7, 8) #暑假开始时间
	now_time = datetime.datetime.now() #现在的时间
	today = datetime.date.today()
	summer_holiday_last = (summer_holiday - now_time).days #暑假还剩下多少天（错误）
	summer_holiday_last_ture = summer_holiday_last+1 #暑假还剩下多少天（正确）
	summer_holiday_last_baifenbi = (((now_time - summer_holiday_start).days)/53)*100 #计算百分比
	summer_holiday_last_baifenbi_ture = math.floor(summer_holiday_last_baifenbi) #换成整数
	bfb = open("/home/redapple/.holiday/bfb.txt", "w") #打开百分比的写入文件（请按自己实际情况更改）
	bfb.write(str(summer_holiday_last_baifenbi_ture)) #写入百分比
	bfb.close() #关闭文件
	os.system("rm /home/redapple/.holiday/jdt.txt") #删除jdt文件
	os.system("python3 /home/redapple/.holiday/jdt.py >> /home/redapple/.holiday/jdt.txt") #把另外一个py程序输出的百分比进度条写入到文件里（路径自己修改）比
	file = open("/home/redapple/.holiday/homework.txt", "r") #打开作业列表（自己修改路径）
	jdt = open("/home/redapple/.holiday/jdt.txt", "r").read() #打开进度条文件（自己修改路径）
	tips = "今天是" + str(today) + "\n" + "距离暑假结束还有" + str(summer_holiday_last_ture) + "天" + "\n" + "暑假已经过去了" + str(jdt) #配置窗口要显示的内容
	tips_finally = easygui.codebox(tips,"倒计时小程序",file) #显示窗口
	file.close() #关闭文件
	if tips_finally == None: #如果用户按了关闭或取消
		break #退出程序
	else: #反之
		file = open("/home/redapple/.holiday/homework.txt", "w") #打开homework文档（自己修改路径）
		file.write(tips_finally) #写入用户输入新的内容
		file.close() #关闭文件