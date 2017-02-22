import time,random

print('正在 从zph中获取数据')
print('正在预测语文成绩')


time.sleep(0.5)

a = random.randint(45,100)
print (a)
print('正在 从nx中获取数据')
print('正在预测数学成绩')

time.sleep(0.5)

b = random.randint(45,100)
print (b)
print('正在 从zhl中获取数据')
print('正在预测英语成绩')

time.sleep(0.5)

c = random.randint(45,100)
print (c)

print('正在预测生物地理成绩')

time.sleep(0.5)

d = random.randint(45,100)
print (d)

print('正在预测历史成绩')
time.sleep(0.5)

e = random.randint(45,100)
print (e)

print('您的总分为')

time.sleep(0.5)
f = a+b+c+d+e
print (f)
if(f>=300) and (f<=350):  
    print ('很差') 
elif(f>=351 and f<400):  
    print ('很一般') 
elif(f>=401 and f<450):  
    print ('太好了')  
elif(f>=0 and f<300):  
    print ('你就等着挨骂吧')  
else:  
    print ('这个成绩，真是厉害')  
