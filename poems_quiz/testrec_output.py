# Python 3.x

import os,random,time,datetime
type_count = str(input("请输入生成的诗句个数,【WARNING】这会替换以前存在的诗句："))
delete_choice = input("是否删除原文档（不删除可以智能检测重复）[y/n]")
today = str(datetime.date.today())
time_hour = str(time.localtime().tm_hour)
time_minutes = str(time.localtime().tm_min) 
now_time = "本份题目生成时间为:"+" "+today+" "+time_hour+"："+time_minutes
if delete_choice == "y":
	os.system("echo 古诗默写测试 > output.txt && echo 测试答案 > answer.txt")
elif delete_choice == "n":
	os.system("echo '     ' >> output.txt && echo '       ' >> answer.txt")
else:
	print("输入错误")
	exit()
count = int(1)
while True:
	if int(count) < int(type_count):
		poems_file = open("poems.txt")
		poems_str = poems_file.read()
		poems_file.close()
		poems_list = poems_str.split("++++++++++++++++")
		poems_num = len(poems_list)
		test_poem = poems_list[random.randint(0,poems_num-1)] # select a poem randomly
		test_poem_sents = test_poem.split("\n") # split the poem into sentences list
		test_poem_sents.pop() # del last ""
		del test_poem_sents[0]
		test_poem_title = test_poem_sents[0]
		sents_num = len(test_poem_sents) - 1
		test_sent = test_poem_sents[random.randint(1,sents_num)]
		test_first_or_last = random.randint(0,1)
		test_sent_list = test_sent.split("，")
		if len(test_sent_list) == 1:
			test_sent_list = test_sent.split("？")

		if test_first_or_last == 0:
			show_first_or_last = "下一句" 
		else:
			show_first_or_last = "上一句"
		if test_first_or_last == 0:
			output_raw = test_sent_list[test_first_or_last] + "，" + "_________________" + "（" + test_poem_title +"）"
		else:
			output_raw = "_________________" + "，" + test_sent_list[test_first_or_last] + "（" + test_poem_title +"）" 
		output = (str(count) + "." + output_raw)
		answer = (str(count) + "." + "（" + test_poem_title + "） " + test_sent_list[0] + " " + test_sent_list[1])
		output_file_open = open("output.txt",'r')
		output_file = output_file_open.read()
		if output_raw in output_file:
			print("查找到重复诗句！将换成一句新的！")
			count-=1
		else:
			os.system("echo" + " " + output+ " " + ">> output.txt")
			os.system("echo" + " " + answer+ " " + ">> answer.txt")
		output_file_open.close()
		if int(count) < int(type_count):
			count+=1

	else:
		poems_file = open("prose.txt")
		poems_str = poems_file.read()
		poems_file.close()
		poems_list = poems_str.split("++++++++++++++++")
		poems_num = len(poems_list)
		test_poem = poems_list[random.randint(0,poems_num-1)] # select a poem randomly
		test_poem_sents = test_poem.split("\n") # split the poem into sentences list
		test_poem_sents.pop() # del last ""
		del test_poem_sents[0]
		test_poem_title = test_poem_sents[0]
		sents_num = len(test_poem_sents) - 1
		test_sent = test_poem_sents[random.randint(1,sents_num)]
		test_first_or_last = random.randint(0,1)
		test_sent_list = test_sent.split("，")
		if len(test_sent_list) == 1:
			test_sent_list = test_sent.split("？")

		if test_first_or_last == 0:
			show_first_or_last = "下一句" 
		else:
			show_first_or_last = "上一句"
		if test_first_or_last == 0:
			output_raw = test_sent_list[test_first_or_last] + "，" + "_________________" + "（" + test_poem_title +"）"
		else:
			output_raw = "_________________" + "，" + test_sent_list[test_first_or_last] + "（" + test_poem_title +"）" 
		output = (str(count) + "." + output_raw)
		answer = (str(count) + "." + "（" + test_poem_title + "） " + test_sent_list[0] + " " + test_sent_list[1])
		output_file_open = open("output.txt",'r')
		output_file = output_file_open.read()
		if output_raw in output_file:
			print("查找到重复诗句！将换成一句新的！") 
		else:
			os.system("echo" + " " + output+ " " + ">> output.txt")
			os.system("echo" + " " + answer+ " " + ">> answer.txt")
			os.system("echo" + " " + now_time + ">> output.txt")
			os.system("echo" + " " + now_time + ">> answer.txt")
			print("生成完毕")
			exit()