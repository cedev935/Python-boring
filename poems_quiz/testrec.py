# Python 3.x

'''
请把诗句放在与本文件同目录的poems.txt
格式如下：
--------NOT INCLUDE THIS---------
望岳
岱宗夫如何？齐鲁青未了。
造化钟神秀，阴阳割昏晓。
荡胸生层云，决眦入归鸟。
会当凌绝顶，一览众山小。
++++++++++++++++
春望
国破山河在，城春草木深。
感时花溅泪，恨别鸟惊心。
烽火连三月，家书抵万金。
白头搔更短，浑欲不胜簪。
--------NOT INCLUDE THIS---------
'''

import os,random,time
poems_file = open("poems.txt")
poems_str = poems_file.read()
poems_file.close()

poems_list = poems_str.split("++++++++++++++++")

poems_num = len(poems_list)

passed = 0
failed = 0
total_time_cost = 0
while(True):
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
    start_time = time.time()
#   inputp = input("请输入 “" + test_sent_list[test_first_or_last] + "”" + "【" + test_poem_title +"】" +  show_first_or_last + " ：" )
# If you want to see the tittle of the poem, you can enable this line.
    inputp = input("请输入 “" + test_sent_list[test_first_or_last] + "” 的" + show_first_or_last + " ：")
    end_time = time.time()
    time_cost = end_time - start_time
    total_time_cost += time_cost
    if inputp in test_sent_list[1 - test_first_or_last] and inputp != "":
        statu = "pass"
        passed += 1
        print("输入正确。" + "【" + test_poem_title + "】 " + test_sent_list[0] + " " + test_sent_list[1])
    else:
        statu = "fail"
        print("输入错误。" + "【" + test_poem_title + "】 " + test_sent_list[0] + " " + test_sent_list[1])
        failed += 1
    print("当前速度指数 " + str(1/(total_time_cost/(passed+failed))))
    print("当前正确率 " + str((passed/(passed+failed))*100) + "% ")
    print("")


