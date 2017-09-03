import os
cz = os.path.exists('exists.txt')
if cz == True:
	print('still looking')
else:
	os.system('start warning.vbs')
	os.system('echo True >> exists.txt')