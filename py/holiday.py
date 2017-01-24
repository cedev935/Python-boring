import datetime,time,os,platform

oss = platform.system()

while True :
	now_time = datetime.datetime.now()
	winter_hoilday_boom = datetime.datetime.strptime('2017-02-12  14:00:00', '%Y-%m-%d %H:%M:%S')
	winter_hoilday_boom_c = datetime.datetime.strptime('2017-02-13  00:00:00', '%Y-%m-%d %H:%M:%S')
	winter_hoilday_boom_summer_number = 32-(winter_hoilday_boom_c-now_time).days
	QM = datetime.datetime.strptime('2017-04-02  00:00:00', '%Y-%m-%d %H:%M:%S')
	LD = datetime.datetime.strptime('2017-04-29  00:00:00', '%Y-%m-%d %H:%M:%S')
	DW = datetime.datetime.strptime('2017-05-28  00:00:00', '%Y-%m-%d %H:%M:%S')
	print('距离寒假结束还剩下')
	print (winter_hoilday_boom-now_time)
	print('今天相当于暑假的')
	print('8月',winter_hoilday_boom_summer_number,'日')
	print('距离清明节还剩下')
	print (QM-now_time)
	print('距离劳动节还剩下')
	print (LD-now_time)
	print('距离端午节还剩下')
	print (DW-now_time)
	


	time.sleep(float(0.05))
	if oss == "Windows":
		os.system('cls')
	else:
		os.system('clear')
	
