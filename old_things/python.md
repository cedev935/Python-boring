## Python 学习笔记

// 2022.2.22

### 1.如何获取一个变量的类型

```
test = "xxx"
print(type(test))
```

### 2.bool

```
x = True
y = False
```

NoneType 直接赋None

### 3.变量名要求

变量名只能是 字母、数字、下划线

变量名不能以数字开头

python变量名区分大小写

### 4.可以使用int(x)进行类型转化

```
x = "233"
233 + int(x)
```
同样的还有int() float() str()

### 5.若字符串相加，会把数字直接粘贴进来

```
x = "10"
y = "20"
x +y
```
输出结果：1020

该结果仍为string

### 6.字符操作表

#### 1. + 

#### 2. -

#### 3. /

注意，除出来会有小数

#### 4.% 取余

#### 5. *

#### 6.// 除出来取整数

例如 7//2 是 3

只会向下取整

#### 7.** 平方

### 7.可用and 来判断

```
x = 14

(x > 10) and (x <20)
```

### 8.字符串可以乘以一个整数

```
x = "2333"
x*3
```

### 9.常用符号

\' 单引号
\" 双引号
\\ 斜杠
\n 新的一行
\r 回车
\t tab
\b 删除

### 10.改变字符的情形

```
x = "this is a test"
print(x.lower()) //所有字母转成小写
print(x.upper()) //所有字母转为大写
print(x.title()) //转为标题格式
```

### 11.format 函数

```
a = "test"
b = "do"
name = "My name is {arg_0}{arg_1}".format(arg_0=a,arg_1=b)
name = "My name is {0}{1}".format(a,b)
name = "My name is {}{}".format(a,b)
name = "My name is {}{}".format("test","do") //以上为实现的四种方式
```
把type不是string的放在花括号里面
```
a = 3.14159
b = 12345
c = a*b
print("result is :{}km".format(c)) //答案是c原来的值
print("result is :{:.1f}km".format(c)) //保留一位小数
print("result is :{:,.1f}km".format(c)) //保留一位小数，并且加上分度
```

添加空格
```
num = "ten"
print(" I have {:30} apples".format(num))
```

使用混合参数

下列例子将会叠加30个空格，保留4位效数，添加分度的buff

```
num = 10000.0
print("I have a {:30,.4f} apples" .format(num))
```

一种相当于format的用法

```
num = 10000.0
print(f"I have a {num} apples")
```

```
num = 10000.0
print(f"I have a {num:30,.4f} apples")
```

### 12.去除空格

```
a = "python "
a.rstrip() //把右边的空格全部去掉，但是不会对原来的变量产生修改
a.lstrip() //把左边的空格全部去掉
a.strip() //左右两边的空格都去掉
```

### 13.注释

使用 "#" 

### 14.没写完的代码记得在后面加入 \ 然后才能换行 

### 15.list
#### 1.创建list
```
a = ["a","b","c","d"]
print(a)
```

以上为使用list

list可以相加
```
a = ["a","b"]
b = ["c",]
c = a+b
print c
```

同理，list可以乘以一个常数，会直接重复排列

#### 2.获取list中元素

```
a = ["a","b","c","d"]
a[2] #获取的是第三个元素，他是从0开始
``` 

#### 3.获取list的元素个数

len(a)

#### 4.更改list的值

```
a = ["a","b","c","d"]
a[2] = "fuck"
print(a)
```

#### 5.添加元素

```
a = ["a","b","c","d"]
a.append("line")
print(a)
```

#### 6.插入元素

```
a = ["a","b","c","d"]
a.insert(0,"wat") #0为想要添加到的位置，也就是这个元素会被放在哪里
print(a)
```

#### 7.删除元素

```
a = ["a","b","c","d"]
del a[0] #将会删除第一个元素
print(a)
```
#### 8.pop

```
a = ["a","b","c","d"]
b = a.pop()
print(a)
print(b)
```

将会弹出最后一个元素，并且用print(b)可以返回这个元素

pop可以指定位置

> b = a.pop(2)

pop将会改变原list

#### 9.remove：用元素名删除

```
a = ["a","b","c","d"]
a.remove("a") #将会删除元素"a"
print(a)
```

如果list中有两个相同的value，就会删除开始的一个

#### 10.对list的元素进行排序

``` 
a = ["b","a","c","d"]
a.sort()#会按照字母顺序排序
print(a)
```

``` 
a = ["b","a","c","d"]
a.sort(reverse=True)#会按照字母顺序反向排序
print(a)
```

以上为永久排序

若要暂时排序，则按如下

``` 
a = ["a","b","c","d"]
print(sorted(a)) #会按照字母顺序排序
print(sorted(a,reverse=True))#会按照字母顺序反向排序
```

#### 11.range

```
a = list(range(10)) #list将range(10)强行转化为list
print(a)
```

a的list将从0排序到9

```
a = list(range(0,100,5)) #第一个参数是从哪里开始，第二个是到哪里截止（不包括这个数），第三个是公差多少
print(a)
```

#### 12.slicing lists

```
a=list(range(0,100,5))
print(a[1:5:2]) #从第二个**元素**开始，5指的是结束的**元素（不包括）**，2指的是间隔的**元素**
print(a[0:3]) #表示从第一个取到第四个（第四个不取）
print(a[4:]) #从第五个开始取
print(a[-1]) #取最后一个
print(a[::-1]) #数列全部倒着写
```

//2022.03.08

#### 13.一些常用的函数
```
len(num) #list里面元素的个数
max(num) #list里面的最大值
min(num) #list里面的最小值
```

要用max/min函数，必须是int

### 16.tuples

#### 1.创建

```
a = ("apple","banana")
```


#### 2.做加法

```
a = ("apple","banana")
b = ("cabbage",) #必须要在这里加逗号
c = a + b
print(c)
```
#### 3.乘法

```
a = ("shit",)
print(a*3)
```

会把原来的重复三遍

#### 4.访问

```
a = ("apple","banana")
print(a[0])
```

#### 5.修改性

不可以更改！！也就是修改和删除都不可以！

但是整个tuple是可以删掉的，同理list也可以这样删除

```
a = ("apple","banana")
del a 
```

### 17.sets

#### 1.创建

```
a = set([1,2,3]) #转换list到set
b = {1,2,3} #直接创建set
# a和b相等
```

不可以存储相同元素（其实可以在创建的时候添加多个元素，但是set不会保存相同的元素，因此print出来不会包含重复的元素）

set是无序的

不可以使用index进行访问

#### 2.in函数

```
basket = {'apple','orange'}
print ('orange' in basket) #判断orange在不在basket里面，会返回False或是True
```
tuple，list也可以

#### 3.两个set的操作符

```
a = {'apple','orange','cabbage'}
b = {'apple','pear'}
print (a|b) #取并集
print (a&b) #取交集
print (a^b) #先取并，减去交
print ((a|b)-(a&b)) #先取并，减去交
```

### 18.字典

#### 1.两个重要概念

key和value

#### 2.定义

```
mydict = {key1:val1,key2:val2,key3:val3} #该代码会报错，注意看下面的笔记
```

#### 3.创建

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
```
注意不可以使用index

#### 4.访问字典

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
print(sch["Monday"])
print(sch.get("Monday",No class")) #用get函数来get value，第一个参数是key，第二个参数的意思是假设key不在字典里面，就返回后面的数值
print(sch.get("Sunday","No class") #应用，会返回No class
```

#### 5.添加新元素

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
sch["THR"] = "Chinese" #第一种添加形式
sch.update({"THR":"Chinese}) #第二种添加形式
```

#### 6.修改元素

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
sch["Monday"] = "Chinese"
```

#### 7.删除元素

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
del sch["Monday"] #第一种形式
sch.pop("Monday") #第二种形式，推出
```

#### 8.只获取keys或是values

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
print(sch.keys()) #返回所有keys
print(sch.values()) #返回所有values
```

#### 9.join函数

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
print(", ".join(sch.keys())) #后面加的是可以遍历的数据结构,元素必须是string
```

### 19.if else语句

#### 1.基础语句（伪代码）

```
if condition
	execute sth
else
	execute sth else
```

#### 2.举例

```
x = True
if x:
	print("Executing if")
else:
	print("Executing else")
print("Print regardless of the outcome of the if-else block") #这一行缩进之后，会认为是else里面的内容
```

缩进注意：要么用tab，要么用space，但是space一定要一样的个数

#### 3.elif

伪代码：

```
if con1:
	con1
elif con2:
	con2
else:
	con1 and con2 false
```

如果满足if和elif，那么也只会执行if的语句

### 20.for/loop

#### 1.伪代码

```
for item in item_list:
	do something to item
```

for 循环只能用于eatable（tuple，list，set）
#### 2.几个实例

```
guest_list = ["Eric","Alice","John","Lisa"]
for guest in guest_list:
	print("Hi, {:5}, welcome to my party".format(guest))
```

```
my_set={"apple","peach","lime"}
for f in my_set:
	print(f)
```
// 2022.03.15
#### 3.和字典混合使用

```
my_dict={"apple":"red","peach":"pink"}
for f in my_dict:
	print(f"The color of {f} is {my_dict[f]}") # f是key，my_dict[f]是value
```

#### 4.把key和value同时赋值

```
my_dict={"apple":"red","peach":"pink"}
for f,c in my_dict.items(): #注意这个地方加了.items()
	print(f"The color of {f} is {c}")
```

#### 5.也可以之访问keys或者是value

```
my_dict={"apple":"red","peach":"pink"}
for f in my_dict.keys():
	print(f)
for c in my_dict.values():
	print(c)
```

#### 6.range&for

```
for i in range(5):
	print("the squad of {} is {}".format(i,i**5))
```


#### 7.List comprehension
实例1
```
my_list = [1,2,3]
double = [num*2 for num in my_list]
print(double)
```

实例2

```
vocab = ["apple","afternoon","alter"]
long_words [ w for w in vocab if len(w) > 5]
print(long_words)
```

若变为普通写法

```
vocab = ["apple","afternoon","alter"]
long_words=[]
for w in vocab:
	if len(w) >5:
		long_word.append(w)
```

### 21.while/loop

#### 1.一个实例

```
n = 0
while n < 5:
	print("Excuting while loop")
	n = n+1
print("Finished while loop")
```

#### 2. 注意避免死循环

```
x = 1
while x <= 5:
	print(x)
```

### 22.break

#### 1.一个实例

```
num = 0
while num <10:
	num+= 1
	if num %2 == 0:
		break #这将会打破while循环
	print(num) #最终输出1
```

### 23.continue

#### 1.一个实例

```
num = 0
while num <10:
	num += 1
	if num % 2 ==0:
		continue # 只是满足这个if的时候跳出一次，但是还是会继续
	print(num) # 输出1、3、5、7、9
```

### 24.function

#### 1.function形式


```
def functionMame(arg1,arg2,....,argN):
	statements
	retuen value
```

所有写在函数的内容都要缩进

#### 2.一些例子

``` 
def greet_user():
	"""Display xxx""" #本质是string，但是可以认为是注释
	print("Hello!")

great_user()
```

#### 3.多个双引号

```
text = """It is a message""" 
lang_1 = "I know\npython\nc++\n"
lang_2 = """I know
python
c++
"""

print(text) #string，和一个双引号是一样的
print(lang_1) 
print(lang_2) #lang1和lang2是一样的，三个双引号允许写很多东西在多行之间
```

#### 4.nultiple function calls

```
def print_num(num):
	print(f"My favourite number is {num}")

print_num(7)
print_num(14)
print_num(2)
```

#### 5. parameters and arguments

```
def per(aniaml,pet): #parameters

per('dog','harry') #arguments
```

postion arguments的意思是按顺序传参，这个例子是先传dog后传harry

#### 6.keyword arugements

```
def per(aniaml,pet): #parameters

per(aniaml='dog',pet='harry') #arguments
```

可以不用按照顺序传参。

#### 7.default values

```
def per(aniaml = "dog",pet = "harry"):

per()
```

缺省就是dog和harry

如果不定义的话，会报错。

```
def describe_pet(animal_type,pet_name):
	print(f"I have a {animal_type).")
	print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet() #不传或者穿少了都会报错
```

#### 8.return

```
def get_name(first,last):
	full_name = f"{first}{last}"
	return full_name.tltle()

name = get_name('ann','spencer') 
print(name)
```

可以return任何东西

```
def build(first,last):
	person = {'first':first,'last':last}
	return person

name = build('ann','spencer')
print(name)
```

#### 9.可以传入list

```
def greet(names):
	for name in names:
		msg = f"Hello,{name.title()}!"
		print(msg)

users=['ann','john','jim']
greet(users)
```

#### 10.修改list

```
def greet_users(names):
	removal = names.pop()
	for name in names:
		msg = f"Hello,{name.title()}!"
		print(msg)

users = ['ann','john','jim']
greet_users(users)
print(users) #最后已经删掉了，print的是前两个
```

也就是说，传进去增加了或者修改了，最后的list已经是改变的了

**WDNMD,是title不是title，真是shit！！！！！**

#### 11.避免修改原本的list

```
def greet_users(names):
	removal = names.pop()
	for name in names:
		msg = f"Hello,{name.title()}!"
		print(msg)

users = ['ann','john','jim']
greet_users(users[:]) #相当于全部抽出来了，相当于一个copy
print(users) 
```
//2022.03.22
#### 12.不确定argument的做法（使用*）

```
def make_pizza(*toppings):
	print("Toppings:{}".format(",".join(toppings))) // join函数是把eatable得元素串在一起

make_pizza('a')
make_pizza('a','b','c')
```

#### 13.多个参数和单个参数可以混合使用，但是注意后面那个才能带星号

```
def a(a,*b):
	print("number {}".format(a))
	print("b{}".format(",".join(b)))

a(16,"fuck")
a(12,"shit","dict","test")
```

#### 14.双星号(arbitrary keyword)

```
def build(first,last,**user): #传进去就相当于字典了
	user['first']=first
	user['last'] = last
	return user
	
pro = build('albert','einstein',location='prin',field='phy')
print(pro)
```

#### 15.function annotations

可以把参数的type固定住，也可以指定返回值

```
def greeting(name:str) -> str:  //如果有默认参数，则变为(name:str='Ann')
	return 'Hello ' + name

print(greeting('John'))
````

### 24.import

#### 1.使用方法：先把函数存在.py

```
module_name.function_name()
```

#### 2.具体用法，假设有一个pizza.py

```
import pizza
pizza.make_pizza(16,'pepperoni')
pizza.make_pizza(12,'mushrooms','green peppers','extra cheese')
```

#### 3.直接在import里面引用函数

```
from pizza import make_Pizza
make_pizza(16,'pepperoni')
make_pizza(12,'mushrooms','green peppers','extra cheese')
```

#### 4.重新命名function name

```
from pizza import make_pizza as mp
mp(16,'pepperoni')
mp(12,'mushrooms','green peppers','extra cheese')
```

#### 5.重新命名module name

```
import pizza as p
p.make_pizza(16,'pepperoni')
p.make_pizza(12,'mushrooms','green peppers','extra cheese')
```

#### 6.可以import变量

```
person = {
	"name":"John",
	"age":36,
	"country":"Normay"
}

#以上为profile.py

import profile
a = profile.person["age"]
print(a)
```

### 25.命名函数

```
x = lambda a : a +10 //前面的是参数，后面的事表达式
print(x(5))
```

```
x = lambda a,b:a*b
print(x(5,6))
```

```
x = lambda a,b,c :a+b+c
print(x(5,6,2))
```

### 26.map函数

#### 1.基本语法

```
map(funx,iter_obj) //把int传到前面的funx函数里
```

#### 2.具体例子

```
def double(n):
	return n+n
numbers = (1,2,3,4)
result = map(double,numbers) #把每个numbers里面的参数传到double里，然后返回得也是一个iterable object
print(list(result))
```

```
number = (1,2,3,4)
result = map(lamda x:x+x,numbers)
print(list(result))
```

#### 3.多个参数的map

```
numbers1= [1,2,3]
numbers = [4,5,6]
result = map(lambda x,y:x+y,numbers1,numbers2) #numbers1,numbers2都要是iterable
print(list(result))
```

#### 4.int map

```
int_list=[1,2,3]
test = list(map(str,int_list))
print(test)
```


### 27.python scope（作用域）

#### 1.local scope

```
dey myfunx():
	x = 300
	print(x)
myfunc()
```

以上案例x只能在函数里面使用，不能在外面使用

#### 2.function inside funcion

```
def myfunx():
	x = 300
	def myinnerfunx():
		print(x)
	myinnerfunc()
	
myfunx()
```

这个时候内部的myinnerfunx可以用外面那一层函数的x

#### 3.全局变量

```
x = 300
def myfunx():
	prinx(x)
myfunx()
print(x)
```

在整个文件里都可以使用

#### 4.相同变量名的处理方法

```
x = 300
def myfunc():
	x = 200
	print(x) #这种情况下会当成两个变量，所以这个地方结果是200

myfunc()
print(x) #这个地方print 300
```

#### 5.声明global 变量
```
def myfunx():
	global x #在此处声明x是全局变量
	x = 300
	
myfunx()
print(x)#这里不会报错，将会输出300
```

global可以覆写之前的参数

```
x = 200
def myfunx():
	global x #在此处声明x是全局变量
	x = 300
	
myfunx()
print(x) #将会输出300
```

### 28.input函数
#### 1.基本使用方法
```
msg = input("Tell me sth") #括号内是会输出在屏幕上的内容，用户可以输入内容
print(msg)
```


#### 2.可以和loop循环使用

// 2022.03.29

### 29.filter函数

#### 1.具体例子
```
seq = [0,1,2,3,5,8,13]
result = filter(lambda x: x%2!=0,seq) #将会拣取所有的奇数
print(list(result)) #将输出奇数
```

```
seq = [0,1,2,3,5,8,13]
result = filter(lambda x: x%2==0,seq) #将会拣取所有的偶数
print(list(result)) #将输出偶数
```
注意filter函数只能包含iterable

### 30.RegEx

#### 1.四个基本函数

findall,search,split,sub

#### 2.findall

将返回一个list，返回所有结果

是一个有序的，如果没有找到的话就会返回一个空基
```
import re
txt = "The rain in Spain"
x = re.findall("ai",txt) #第一个函数是搜索的对象，第二个参数是在哪里寻找
print(x)
```

#### 3.search

将会返回一个match object，如果有多个匹配的，只有一个match对象会被返回

```
import re
txt = "The rain in Spain"
x = re.search("n",txt)
print(x)
print("The first n is located in position:", x.start()) #start函数返回的是match object第一个match的位置（注意0是第一位）
```

如果没有匹配的字符串，将会返回``None``

注意None是不符合if条件，例如

```
if None:
	1
else:
	2
```
将会返回2 （也就是相当于False）

如果if和search函数一起连着用，那么应该正确的写法是

```
if re.serach():
	找到了就做这个
else:
	没找到就会做这个
```

#### 4.split

将会返回一个list，把找到的字符串，就用这个字符串，把string都分开，但是注意这个字符串并不会被包括进去

```
import re
txt = "The rain in Spain"
x = re.split(" ",txt) #这里找到的是空格，因此分开后将会返回这四个单词
print(x)
```

假若上述例子的匹配符改为``i`` 那么将会返回

> ['The ra', 'n ', 'n Spa', 'n']

i并不会被包括进去

可以指定分的时候到底要分过少个
```
import re
txt = "The rain in Spain"
x = re.split(" ",txt,1) #这里只会找第一个空格，来进行分
print(x)
```

#### 5.sub

替换函数

```
import re
txt = "The rain in Spain"
x = re.sub(" ","0",txt) #第二个参数将会代替第一个参数
print(x)
```

也可以选择替换多少个match
```
import re
txt = "The rain in Spain"
x = re.sub(" ","0",txt,2) #这里只会替换前两个空格
print(x)
```


### 31.Match object
span,string,group

这三个函数只能和search函数使用
#### 1.span
将会返回第开始和结束的位置
```
import re
txt = "The rain in Spain"
x = re.search("ai",txt)
print(x.span()) #开始的位置是5，结束的位置是7（注意7不包括）
```

#### 2.string

```
import re
txt = "The rain in Spain"
x = re.search("ai",txt)
print(x.string) #print是txt的内容，注意string后面没有括号
```

#### 3.group

```
import re
txt = "The rain in Spain"
x = re.search("ai",txt)
print(x.group()) #print的是查找到的字符串，注意如果跟下面的正则表达式一起用会返回搜索到的东西，而不是整个字符串
```

### 32.特殊的符号（用来搜索）

#### 1.[]

> [a-m]

中括号里面的只会match一个

1. [arn]

将会匹配arn

2.[a-n]

将会匹配a-n

3.[^arn]

除了arn都会匹配

4.[0123]

5.[0-9]

6.[0-5][0-9]

代表两位数字，从00到59

7.[a-zA-Z]
 只要是字母就match
 
8.[+]

一些特殊的符号，如果想要match本身的话就这样表示

#### 2.\

用来搜索一些特殊符号

1. \A

> "\AThe"

将会匹配开头有这个字符串的字符

主义之会返回string开头的the，也只有开头的the会被返回

```
import re
txt = "the cat is 23333,the mouse 66666"
x = re.findall("\Athe",txt)
print(x) #只会返回一个the，因为只有第一个the才是string的开头
```

2. \b

```
r"\bain"
r"ain\b"
```
将会匹配单独的一个单词“ain”，无论有多少个都会返回。

注意这是查找**单词**，所以这个单词两边都要有空格或者开头和结尾还有**标点符号**之类的**分隔符**（反正跟人读的是一样的），也就是说如果要查找的字符左右没有空格将不会返回

具体例子

```
import re
txt = "the cat is sitting on the mat"
x = re.findall(r"\bthe\b",txt)
print(x)
```
将会返回两个the

这里加了r是因为避免python认为这是一个字符串，也就是说这是一个raw string，可在后面的章节看到。

3. \B

```
r"\Bain"
r"ain\B"
```

取得是b的补集

4. \d

> "\d"

用来匹配数字

具体例子如下

```
import re
txt = "200 the cat is sitting on 100 mats"
x = re.findall("\d\d\d",txt) #注意，要查找的数字有多少位数就要写多少个\d
print(x) #将会返回200和100

```

5. \D

> "\D"

数字全部跳过，其他字符（就算空格）每x字符match一次(x是\D的个数)

6. \s

> "\s" 

将会返回这两个字符之间的所有东西（包括空格）

例子：

```
import re
txt = "two cats are sitting on ten mats"
x = re.findall("o\sc",txt)
print(x)
```

将会返回

> ['o c']

7. \w 

> "\w" 

只要是 a-z A-Z 0-9 _ 里面的都会被匹配到

8.\Z

> "Spain\Z"

将会匹配到最后一个单词，也是只会返回最后一个单词

#### 3.

> he..o

match n个长度的string，比如这个例子就回match hello，注意长度是会知道的

#### 4.^

> ^hello 

搜索以hello开头的

#### 5.$

> planet$

搜寻以planet结尾的

#### 6.*

> he.*o

出现零个或者多个，在这里指的是要找一个string，里面包含he，o。中间无论是什么什么东西都会符合。

#### 7.+

> he.+o 

出现一个或多个

#### 8.?

> he.?o 

出现零个或一个

#### 9.{}

> he.{2}o

返回出现的具体中间有多少个字符串的字符（就是限定了中间可以出现多少个字符）

例如hello会被返回，heo，helo，helllo都不行

#### 10.|

> falls|stays

只要命中任意一个就会返回，注意这个时候要用findall函数，不要用search

#### 11.()

```
import re
txt = "heohllhlo"
x = re.findall("h(e|l)o",txt)
print(x)
```

h和o要在e和l前后的，现在要search的时候就是有没有这样的e和l是符合这样的顺序的。

实际上括号里面的是要search的东西，括号外面是条件（围绕的字符串）

**此地方存疑，注意之后复习的时候再搜索**


#### 12.针对以上所有的符号一个应用

```
import re
words = ['writer','waiter','newer','imprtant']
start_im = [w for w in words if re.search(r"\Aim",w)]
print(start_im)
```
