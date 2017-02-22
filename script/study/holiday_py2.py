# TAG:
# 1. bug-fix-needed

# TODO:
# 1. get time from server
# 2. use array


import datetime,time,os,platform,sys

oss = platform.system()

if len(sys.argv) == 2:
	print 'Sleep time: ' + sys.argv[1] + 's'
	jtime = float(sys.argv[1])
else:
	print 'Sleep time: ' + str(0.05) + 's'
	print 'You can use time.py <sleep_time> to set sleep time.'
	jtime = 0.05
	time.sleep(2)

while True :
	now_time = datetime.datetime.now()
	summer_holiday = datetime.datetime.strptime('2016-08-31  14:00:00', '%Y-%m-%d %H:%M:%S')
	mid_f = datetime.datetime.strptime('2016-09-15  00:00:00', '%Y-%m-%d %H:%M:%S')
	country_f = datetime.datetime.strptime('2016-10-01  00:00:00', '%Y-%m-%d %H:%M:%S')
	open_f = datetime.datetime.strptime('2017-01-01  00:00:00', '%Y-%m-%d %H:%M:%S')
	print '距离暑假结束只剩下'
	print summer_holiday-now_time
	print '距离16年中秋节还有'
	print mid_f-now_time
	print '距离16年国庆还有'
	print country_f-now_time
	print '距离17年元旦还有'
	print open_f-now_time
	time.sleep(jtime)
	if oss == "Windows":
		os.system('cls')
	else:
		os.system('clear')
	
                            
