import datetime,easygui,math,os,re,sys,time #导入模块
while True: #循环
	summer_holiday = datetime.datetime(2018, 2, 25) #暑假结束时间
	summer_holiday_start = datetime.datetime(2018, 1, 26) #暑假开始时间
	now_time = datetime.datetime.now() #现在的时间
	today = datetime.date.today()
	summer_holiday_last = (summer_holiday - now_time).days #暑假还剩下多少天（错误）
	summer_holiday_last_ture = summer_holiday_last+1 #暑假还剩下多少天（正确）
	summer_holiday_last_baifenbi = (((now_time - summer_holiday_start).days)/30)*100 #计算百分比
	summer_holiday_last_baifenbi_ture = math.floor(summer_holiday_last_baifenbi) #换成整数
	bfb = open(r"C:\Users\redapple\.holiday\bfb.txt", "w") #打开百分比的写入文件（请按自己实际情况更改）
	bfb.write(str(summer_holiday_last_baifenbi_ture)) #写入百分比
	bfb.close() #关闭文件
	os.system(r"del C:\Users\redapple\.holiday\jdt.txt") #删除jdt文件
	os.system(r"python C:\Users\redapple\.holiday\jdt.py >> C:\Users\redapple\.holiday\jdt.txt") #把另外一个py程序输出的百分比进度条写入到文件里（路径自己修改）比
	file = open(r"C:\Users\redapple\.holiday\homework.txt", "r") #打开作业列表（自己修改路径）
	jdt = open(r"C:\Users\redapple\.holiday\jdt.txt", "r").read() #打开进度条文件（自己修改路径）
	summer_holiday_homework_monitor = open(r"C:\Users\redapple\.holiday\homework.txt", "r").read()
	mark = re.compile('`') #设定要查找的内容（注意在作业前要加`）
	find = re.findall(mark, summer_holiday_homework_monitor) #查找
	find_mount = len(find) #显示有多少个
	finish_homework = 0-find_mount #用作业总数减去得到的结果（自己改作业总数）
	calc = math.floor((finish_homework/15)*100) #计算
	homework_baifenbi = open(r"C:\Users\redapple\.holiday\homework_bfb.txt", "w") #打开一个百分比文件
	homework_baifenbi.write(str(calc)) #写入计算的百分比
	homework_baifenbi.close()
	os.system(r"del C:\Users\redapple\.holiday\homework_jdt.txt") #删掉已有的文件（自己改路径）
	os.system(r'python C:\Users\redapple\.holiday\homework_jdt.py > C:\Users\redapple\.holiday\homework_jdt.txt') #把进度条写入文件
	homework_jindutiao = open(r"C:\Users\redapple\.holiday\homework_jdt.txt", "r").read() #读取文件
	convent_summer = 28-summer_holiday_last_ture #计算相当于暑假的多少号
	if convent_summer <= 0: #但是如果<28天就说明相当于暑假的7月
		convent_summer_seven = 31-(summer_holiday_last_ture-28) #所以这个时候就要重新计算     
		print_summer = "7月" + str(convent_summer_seven) #就是相当于暑假的七月
	else: #反之
		print_summer = "8月" + str(convent_summer) #就是相当于暑假的八月
	tips = "今天是" + str(today) + "\n" + "距离寒假结束还有" + str(summer_holiday_last_ture) + "天" + "\n" + "寒假已经过去了" + "\n" +                           str(jdt) + "\n" + "现在相当于暑假的" + str(print_summer) + "日" + "\n" + "寒假作业已经完成了" + "\n" +           str(homework_jindutiao) #配置窗口要显示的内容
	tips_finally = easygui.codebox(tips,"倒计时小程序",file) #显示窗口
	file.close() #关闭文件
	if tips_finally == None: #如果用户按了关闭或取消
		break #退出程序
	else: #反之
		file = open(r"C:\Users\redapple\.holiday\homework.txt", "w") #打开homework文档（自己修改路径）
		file.write(tips_finally) #写入用户输入新的内容
		file.close() #关闭文件
