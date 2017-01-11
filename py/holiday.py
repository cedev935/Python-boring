import datetime,time,os,platform

oss = platform.system()

while True :
	now_time = datetime.datetime.now()
	final_test = datetime.datetime.strptime('2017-01-09  00:00:00', '%Y-%m-%d %H:%M:%S')
	winter_hoilday = datetime.datetime.strptime('2017-01-13  00:00:00', '%Y-%m-%d %H:%M:%S')

	print('距离17年期末考试还剩下')
	print (final_test-now_time)
	print('距离17年寒假还剩下')
	print (winter_hoilday-now_time)

	time.sleep(float(0.05))
	if oss == "Windows":
		os.system('cls')
	else:
		os.system('clear')
	
