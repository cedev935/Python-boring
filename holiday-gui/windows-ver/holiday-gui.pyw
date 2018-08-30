 # -*- coding: utf-8 -*- #
import datetime,easygui,math,os,re,sys,time,calendar #导入模块
while True: #循环
	summer_holiday = datetime.datetime(2018, 9, 2) #暑假结束时间
	summer_holiday_start = datetime.datetime(2018, 8, 27) #暑假开始时间
	now_time = datetime.datetime.now() #现在的时间
	today = datetime.date.today()
	summer_holiday_last = (summer_holiday - now_time).days #暑假还剩下多少天（错误）
	summer_holiday_last_ture = summer_holiday_last+1 #暑假还剩下多少天（正确）
	summer_holiday_past = (now_time - summer_holiday_start).days #暑假已经过去了多少天
	summer_holiday_past_hour = summer_holiday_past*24+time.localtime().tm_hour
	summer_holiday_last_baifenbi = (summer_holiday_past_hour/152)*100 #计算百分比
	summer_holiday_last_baifenbi_ture = math.floor(summer_holiday_last_baifenbi) #换成整数
	bfb = open(r"C:\Users\redapple\holiday\bfb.txt", "w") #打开百分比的写入文件（请按自己实际情况更改）
	bfb.write(str(summer_holiday_last_baifenbi_ture)) #写入百分比
	bfb.close() #关闭文件
	os.system(r"del C:\Users\redapple\holiday\jdt.txt") #删除jdt文件
	os.system(r"python C:\Users\redapple\holiday\jdt.py >> C:\Users\redapple\holiday\jdt.txt") #把另外一个py程序输出的百分比进度条写入到文件里（路径自己修改）比
	file = open(r"C:\Users\redapple\holiday\homework.txt", "r") #打开作业列表（自己修改路径）
	jdt = open(r"C:\Users\redapple\holiday\jdt.txt", "r").read() #打开进度条文件（自己修改路径）
	summer_holiday_homework_monitor = open(r"C:\Users\redapple\holiday\homework.txt", "r").read()
	mark = re.compile('`') #设定要查找的内容（注意在作业前要加`）
	find = re.findall(mark, summer_holiday_homework_monitor) #查找
	find_mount = len(find) #显示有多少个
	finish_homework = 2-find_mount #用作业总数减去得到的结果（自己改作业总数）
	calc = math.floor((finish_homework/2)*100) #计算
	homework_baifenbi = open(r"C:\Users\redapple\holiday\homework_bfb.txt", "w") #打开一个百分比文件
	homework_baifenbi.write(str(calc)) #写入计算的百分比
	homework_baifenbi.close()
	os.system(r"del C:\Users\redapple\holiday\homework_jdt.txt") #删掉已有的文件（自己改路径）
	os.system(r'python C:\Users\redapple\holiday\homework_jdt.py > C:\Users\redapple\holiday\homework_jdt.txt') #把进度条写入文件
	homework_jindutiao = open(r"C:\Users\redapple\holiday\homework_jdt.txt", "r").read() #读取文件
	basic_day = datetime.date.today() #导入今天
	check_day = datetime.date(2018,9,2) #导入结束的日期
	days_gap  = (check_day-basic_day).days-(7-basic_day.isoweekday()) #计算差几个周
	#math.ceil(days_gap/7---->判断是日期差几个周
	#check_day.isoweekday() ---->获取周几
	number = str(check_day.isoweekday()) #转换str
	if number == "1": #一系列判断
		weekday = "一"
	elif number == "2":
		weekday = "二"
	elif number == "3":
		weekday = "三"
	elif number == "4":
		weekday = "四"
	elif number == "5":
		weekday = "五"
	elif number == "6":
		weekday = "六"
	elif number == "7":
		weekday = "日"
	today_weekday = datetime.datetime.today().strftime("%w"); #今天星期几(数字)
	if today_weekday == "1": #判断
		today_weekday = "一"
	elif today_weekday == "2":
		today_weekday = "二"
	elif today_weekday == "3":
		today_weekday = "三"
	elif today_weekday == "4":
		today_weekday = "四"
	elif today_weekday == "5":
		today_weekday = "五"
	elif today_weekday == "6":
		today_weekday = "六"
	elif today_weekday == "0":
		today_weekday = "日"
	calc_weekday = "暑假扩展支持将在"+('下'*math.ceil(days_gap/7)+'周'+weekday)+"结束"+"，"+"并且今天是星期"+str(today_weekday) #输出星期计算
	cal_8 = calendar.month(2018, 8) #导入日历
	cal_9 = calendar.month(2018, 9) #导入日历
	remove_egl_8 = cal_8.replace("August 2018","二零一八年八月") #删除最顶上的日历以免替换的时候有歧义
	remove_egl_9 = cal_9.replace("September 2018","二零一八年九月")#删除最顶上的日历以免替换的时候有歧义
	today_false = datetime.date.today() #倒入今天日期
	today_true = str(today_false.day) #str今天日期（精确到日）
	change_finish = remove_egl_9.replace("1  2","1 毕") #替换假期结束日期
	change_all = remove_egl_8.replace(today_true,"今") #替换今天日期
	now_time_hour = time.localtime().tm_hour #获取现在的小时
	now_time_minutes = time.localtime().tm_min #获取现在的分钟
	calc_hours = 24-now_time_hour+(summer_holiday_last)*24+8 #计算还有多少小时
	calc_minutes = ((summer_holiday_last)*24+7)*60+(24-now_time_hour)*60+60-now_time_minutes #计算还有多少分钟
	def getday(y=2017,m=8,d=15,n=0): #定义计算前几日函数
		the_date = datetime.datetime(y,m,d)
		result_date = the_date + datetime.timedelta(days=n)
		d = result_date.strftime('%Y-%m-%d')
		return d
	getday = same_date = getday(datetime.datetime.now().year,datetime.datetime.now().month,datetime.datetime.now().day,-summer_holiday_last_ture)#获取前x天是几号
	like_winter = 25-summer_holiday_last_ture #模拟寒假
	like_summer = 29-summer_holiday_last_ture #模拟暑假
	like_exam = 26-summer_holiday_last_ture
	print_like_winter = "今天相当于寒假的2月"+str(like_winter)+"日" #模拟寒假的输出
	print_like_summer = "今天相当于去年暑假的8月"+str(like_summer)+"日"
	print_like_exam = "今天对于开学考试来说相当于8月"+str(like_exam)+"日"
	calc_summer_holiday_last_change_to_week = summer_holiday_last_ture//7
	calc_summer_holiday_last_change_to_week_remainder = summer_holiday_last_ture%7
	print_calc_summer_holiday_last_change_to_week = "也就是"+str(calc_summer_holiday_last_change_to_week)+"周"+str(calc_summer_holiday_last_change_to_week_remainder)+"天后就是暑假扩展支持结束的时候"
	tips = "今天是" + str(today) + "\n" + "暑假扩展支持已经过了" + str(summer_holiday_past) +"天" + "\n" + "距离暑假扩展支持结束还有" + str(summer_holiday_last_ture) + "天" + "\n" + print_calc_summer_holiday_last_change_to_week + "\n" + str(summer_holiday_last_ture) + "天前是" + getday + "\n" + "距离暑假扩展支持结束还有" + str(calc_hours) + "个小时" + "\n" + "距离暑假扩展支持结束还有" + str(calc_minutes) + "分钟" + "\n" + print_like_winter + "\n" + print_like_summer + "\n" + print_like_exam + "\n"+ "暑假扩展支持已经过去了" + "\n" + str(jdt) + "\n" + "暑假作业已经完成了" + "\n" + str(homework_jindutiao) + "\n" + calc_weekday + "\n" + "日历显示如下" + "\n" + change_all + change_finish #配置窗口要显示的内容
	tips_finally = easygui.codebox(tips,"倒计时小程序",file) #显示窗口
	file.close() #关闭文件
	if tips_finally == None: #如果用户按了关闭或取消
		break #退出程序
	else: #反之
		file = open(r"C:\Users\redapple\holiday\homework.txt", "w") #打开homework文档（自己修改路径）
		file.write(tips_finally) #写入用户输入新的内容
		file.close() #关闭文件
