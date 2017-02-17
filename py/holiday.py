import datetime,time,os,platform
import datetime as dt

operating_system = platform.system() #K-Guan建议

while True :
	now_time = datetime.datetime.now()
#	winter_hoilday_boom = dt.datetime.strptime('2017-02-12  13:00:00', '%Y-%m-%d %H:%M:%S') #组长需要提前1小时到校
#	winter_hoilday_boom_c = dt.datetime.strptime('2017-02-13  00:00:00', '%Y-%m-%d %H:%M:%S')
#	winter_hoilday_boom_summer_number = 31-(winter_hoilday_boom_c-now_time).days
#	winter_hoilday_start = dt.datetime.strptime('2017-01-13  00:00:00', '%Y-%m-%d %H:%M:%S')
#	winter_hoilday_boom_BFB = dt.datetime(2017,1,13,00,00,00)
	QM = dt.datetime.strptime('2017-04-02  00:00:00', '%Y-%m-%d %H:%M:%S')
	LD = dt.datetime.strptime('2017-04-29  00:00:00', '%Y-%m-%d %H:%M:%S')
	DW = dt.datetime.strptime('2017-05-28  00:00:00', '%Y-%m-%d %H:%M:%S')
	ZK = dt.datetime.strptime('2018-06-23  00:00:00', '%Y-%m-%d %H:%M:%S') #根据往年中考时间推测
	GK = dt.datetime.strptime('2021-06-07  00:00:00', '%Y-%m-%d %H:%M:%S')
#	print('距离寒假结束还剩下')
#	print (winter_hoilday_boom-now_time)
#	print('今天相当于暑假的')
#	print('8月',winter_hoilday_boom_summer_number,'日')
#	print('寒假已经过去了')
#	print (((now_time-winter_hoilday_boom_BFB).total_seconds())*100/2631600,'%') #组长需要提前1小时到校
	print('距离清明节还剩下')
	print (QM-now_time)
	print('距离劳动节还剩下')
	print (LD-now_time)
	print('距离端午节还剩下')
	print (DW-now_time)
	print('距离中考还剩下')
	print (ZK-now_time)
	print('距离高考还剩下')
	print (GK-now_time)
	


	time.sleep(float(0.05))
	if operating_system == "Windows":
		os.system('cls')
	else:
		os.system('clear')
	
