import os
cz = os.path.exists('exists.txt')
if cz == True:
	os.system('del /f /q exists.txt')
	os.system('start nice.vbs')
else:
	print('no looking')