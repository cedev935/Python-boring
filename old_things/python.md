# Python 学习笔记

// 2022.2.22

## 1.如何获取一个变量的类型

```
test = "xxx"
print(type(test))
```

## 2.bool

```
x = True
y = False
```

NoneType 直接赋None

## 3.变量名要求

变量名只能是 字母、数字、下划线

变量名不能以数字开头

python变量名区分大小写

## 4.可以使用int(x)进行类型转化

```
x = "233"
233 + int(x)
```
同样的还有int() float() str()

## 5.若字符串相加，会把数字直接粘贴进来

```
x = "10"
y = "20"
x +y
```
输出结果：1020

该结果仍为string

## 6.字符操作表

### 1. + 

### 2. -

### 3. /

注意，除出来会有小数

### 4.% 取余

### 5. *

### 6.// 除出来取整数

例如 7//2 是 3

只会向下取整

### 7.** 平方

## 7.可用and 来判断

```
x = 14

(x > 10) and (x <20)
```

## 8.字符串可以乘以一个整数

```
x = "2333"
x*3
```

## 9.常用符号

\' 单引号
\" 双引号
\\ 斜杠
\n 新的一行
\r 回车
\t tab
\b 删除

## 10.改变字符的情形

```
x = "this is a test"
print(x.lower()) //所有字母转成小写
print(x.upper()) //所有字母转为大写
print(x.title()) //转为标题格式
```

## 11.format 函数

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

## 12.去除空格

```
a = "python "
a.rstrip() //把右边的空格全部去掉，但是不会对原来的变量产生修改
a.lstrip() //把左边的空格全部去掉
a.strip() //左右两边的空格都去掉
```

## 13.注释

使用 "#" 

## 14.没写完的代码记得在后面加入 \ 然后才能换行 

## 15.list
### 1.创建list
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

### 2.获取list中元素

```
a = ["a","b","c","d"]
a[2] #获取的是第三个元素，他是从0开始
``` 

### 3.获取list的元素个数

len(a)

### 4.更改list的值

```
a = ["a","b","c","d"]
a[2] = "fuck"
print(a)
```

### 5.添加元素

```
a = ["a","b","c","d"]
a.append("line")
print(a)
```

### 6.插入元素

```
a = ["a","b","c","d"]
a.insert(0,"wat") #0为想要添加到的位置，也就是这个元素会被放在哪里
print(a)
```

### 7.删除元素

```
a = ["a","b","c","d"]
del a[0] #将会删除第一个元素
print(a)
```
### 8.pop

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

### 9.remove：用元素名删除

```
a = ["a","b","c","d"]
a.remove("a") #将会删除元素"a"
print(a)
```

如果list中有两个相同的value，就会删除开始的一个

### 10.对list的元素进行排序

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

### 11.range

```
a = list(range(10)) #list将range(10)强行转化为list
print(a)
```

a的list将从0排序到9

```
a = list(range(0,100,5)) #第一个参数是从哪里开始，第二个是到哪里截止（不包括这个数），第三个是公差多少
print(a)
```

### 12.slicing lists

```
a=list(range(0,100,5))
print(a[1:5:2]) #从第二个**元素**开始，5指的是结束的**元素（不包括）**，2指的是间隔的**元素**
print(a[0:3]) #表示从第一个取到第四个（第四个不取）
print(a[4:]) #从第五个开始取
print(a[-1]) #取最后一个
print(a[::-1]) #数列全部倒着写
```

//2022.03.08

### 13.一些常用的函数
```
len(num) #list里面元素的个数
max(num) #list里面的最大值
min(num) #list里面的最小值
```

要用max/min函数，必须是int

## 16.tuples

### 1.创建

```
a = ("apple","banana")
```


### 2.做加法

```
a = ("apple","banana")
b = ("cabbage",) #必须要在这里加逗号
c = a + b
print(c)
```
### 3.乘法

```
a = ("shit",)
print(a*3)
```

会把原来的重复三遍

### 4.访问

```
a = ("apple","banana")
print(a[0])
```

### 5.修改性

不可以更改！！也就是修改和删除都不可以！

但是整个tuple是可以删掉的，同理list也可以这样删除

```
a = ("apple","banana")
del a 
```

## 17.sets

### 1.创建

```
a = set([1,2,3]) #转换list到set
b = {1,2,3} #直接创建set
# a和b相等
```

不可以存储相同元素（其实可以在创建的时候添加多个元素，但是set不会保存相同的元素，因此print出来不会包含重复的元素）

set是无序的

不可以使用index进行访问

### 2.in函数

```
basket = {'apple','orange'}
print ('orange' in basket) #判断orange在不在basket里面，会返回False或是True
```
tuple，list也可以

### 3.两个set的操作符

```
a = {'apple','orange','cabbage'}
b = {'apple','pear'}
print (a|b) #取并集
print (a&b) #取交集
print (a^b) #先取并，减去交
print ((a|b)-(a&b)) #先取并，减去交
```

## 18.字典

### 1.两个重要概念

key和value

### 2.定义

```
mydict = {key1:val1,key2:val2,key3:val3} #该代码会报错，注意看下面的笔记
```

### 3.创建

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
```
注意不可以使用index

### 4.访问字典

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
print(sch["Monday"])
print(sch.get("Monday",No class")) #用get函数来get value，第一个参数是key，第二个参数的意思是假设key不在字典里面，就返回后面的数值
print(sch.get("Sunday","No class") #应用，会返回No class
```

### 5.添加新元素

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
sch["THR"] = "Chinese" #第一种添加形式
sch.update({"THR":"Chinese}) #第二种添加形式
```

### 6.修改元素

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
sch["Monday"] = "Chinese"
```

### 7.删除元素

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
del sch["Monday"] #第一种形式
sch.pop("Monday") #第二种形式，推出
```

### 8.只获取keys或是values

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
print(sch.keys()) #返回所有keys
print(sch.values()) #返回所有values
```

### 9.join函数

```
sch = {"Monday":"Physic","Tuesday":"Python","Wednesday":"Math"}
print(", ".join(sch.keys())) #后面加的是可以遍历的数据结构,元素必须是string
```

## 19.if else语句

### 1.基础语句（伪代码）

```
if condition
	execute sth
else
	execute sth else
```

### 2.举例

```
x = True
if x:
	print("Executing if")
else:
	print("Executing else")
print("Print regardless of the outcome of the if-else block") #这一行缩进之后，会认为是else里面的内容
```

缩进注意：要么用tab，要么用space，但是space一定要一样的个数

### 3.elif

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

## 20.for/loop

### 1.伪代码

```
for item in item_list:
	do something to item
```

for 循环只能用于eatable（tuple，list，set）
### 2.几个实例

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
### 3.和字典混合使用

```
my_dict={"apple":"red","peach":"pink"}
for f in my_dict:
	print(f"The color of {f} is {my_dict[f]}") # f是key，my_dict[f]是value
```

### 4.把key和value同时赋值

```
my_dict={"apple":"red","peach":"pink"}
for f,c in my_dict.items(): #注意这个地方加了.items()
	print(f"The color of {f} is {c}")
```

### 5.也可以之访问keys或者是value

```
my_dict={"apple":"red","peach":"pink"}
for f in my_dict.keys():
	print(f)
for c in my_dict.values():
	print(c)
```

### 6.range&for

```
for i in range(5):
	print("the squad of {} is {}".format(i,i**5))
```


### 7.List comprehension
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

## 21.while/loop

### 1.一个实例

```
n = 0
while n < 5:
	print("Excuting while loop")
	n = n+1
print("Finished while loop")
```

### 2. 注意避免死循环

```
x = 1
while x <= 5:
	print(x)
```

## 22.break

### 1.一个实例

```
num = 0
while num <10:
	num+= 1
	if num %2 == 0:
		break #这将会打破while循环
	print(num) #最终输出1
```

## 23.continue

### 1.一个实例

```
num = 0
while num <10:
	num += 1
	if num % 2 ==0:
		continue # 只是满足这个if的时候跳出一次，但是还是会继续
	print(num) # 输出1、3、5、7、9
```

## 24.function

### 1.function形式


```
def functionMame(arg1,arg2,....,argN):
	statements
	retuen value
```

所有写在函数的内容都要缩进

### 2.一些例子

``` 
def greet_user():
	"""Display xxx""" #本质是string，但是可以认为是注释
	print("Hello!")

great_user()
```

### 3.多个双引号

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

### 4.nultiple function calls

```
def print_num(num):
	print(f"My favourite number is {num}")

print_num(7)
print_num(14)
print_num(2)
```

### 5. parameters and arguments

```
def per(aniaml,pet): #parameters

per('dog','harry') #arguments
```

postion arguments的意思是按顺序传参，这个例子是先传dog后传harry

### 6.keyword arugements

```
def per(aniaml,pet): #parameters

per(aniaml='dog',pet='harry') #arguments
```

可以不用按照顺序传参。

### 7.default values

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

### 8.return

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

### 9.可以传入list

```
def greet(names):
	for name in names:
		msg = f"Hello,{name.title()}!"
		print(msg)

users=['ann','john','jim']
greet(users)
```

### 10.修改list

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

### 11.避免修改原本的list

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
### 12.不确定argument的做法（使用*）

```
def make_pizza(*toppings):
	print("Toppings:{}".format(",".join(toppings))) // join函数是把eatable得元素串在一起

make_pizza('a')
make_pizza('a','b','c')
```

### 13.多个参数和单个参数可以混合使用，但是注意后面那个才能带星号

```
def a(a,*b):
	print("number {}".format(a))
	print("b{}".format(",".join(b)))

a(16,"fuck")
a(12,"shit","dict","test")
```

### 14.双星号(arbitrary keyword)

```
def build(first,last,**user): #传进去就相当于字典了
	user['first']=first
	user['last'] = last
	return user
	
pro = build('albert','einstein',location='prin',field='phy')
print(pro)
```

### 15.function annotations

可以把参数的type固定住，也可以指定返回值

```
def greeting(name:str) -> str:  //如果有默认参数，则变为(name:str='Ann')
	return 'Hello ' + name

print(greeting('John'))
````

## 24.import

### 1.使用方法：先把函数存在.py

```
module_name.function_name()
```

### 2.具体用法，假设有一个pizza.py

```
import pizza
pizza.make_pizza(16,'pepperoni')
pizza.make_pizza(12,'mushrooms','green peppers','extra cheese')
```

### 3.直接在import里面引用函数

```
from pizza import make_Pizza
make_pizza(16,'pepperoni')
make_pizza(12,'mushrooms','green peppers','extra cheese')
```

### 4.重新命名function name

```
from pizza import make_pizza as mp
mp(16,'pepperoni')
mp(12,'mushrooms','green peppers','extra cheese')
```

### 5.重新命名module name

```
import pizza as p
p.make_pizza(16,'pepperoni')
p.make_pizza(12,'mushrooms','green peppers','extra cheese')
```

### 6.可以import变量

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

## 25.命名函数

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

## 26.map函数

### 1.基本语法

```
map(funx,iter_obj) //把int传到前面的funx函数里
```

### 2.具体例子

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

### 3.多个参数的map

```
numbers1= [1,2,3]
numbers = [4,5,6]
result = map(lambda x,y:x+y,numbers1,numbers2) #numbers1,numbers2都要是iterable
print(list(result))
```

### 4.int map

```
int_list=[1,2,3]
test = list(map(str,int_list))
print(test)
```


## 27.python scope（作用域）

### 1.local scope

```
dey myfunx():
	x = 300
	print(x)
myfunc()
```

以上案例x只能在函数里面使用，不能在外面使用

### 2.function inside funcion

```
def myfunx():
	x = 300
	def myinnerfunx():
		print(x)
	myinnerfunc()
	
myfunx()
```

这个时候内部的myinnerfunx可以用外面那一层函数的x

### 3.全局变量

```
x = 300
def myfunx():
	prinx(x)
myfunx()
print(x)
```

在整个文件里都可以使用

### 4.相同变量名的处理方法

```
x = 300
def myfunc():
	x = 200
	print(x) #这种情况下会当成两个变量，所以这个地方结果是200

myfunc()
print(x) #这个地方print 300
```

### 5.声明global 变量
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

## 28.input函数
### 1.基本使用方法
```
msg = input("Tell me sth") #括号内是会输出在屏幕上的内容，用户可以输入内容
print(msg)
```


### 2.可以和loop循环使用

// 2022.03.29

## 29.filter函数

### 1.具体例子
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

## 30.RegEx

### 1.四个基本函数

findall,search,split,sub

### 2.findall

将返回一个list，返回所有结果

是一个有序的，如果没有找到的话就会返回一个空基
```
import re
txt = "The rain in Spain"
x = re.findall("ai",txt) #第一个函数是搜索的对象，第二个参数是在哪里寻找
print(x)
```

### 3.search

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

### 4.split

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

### 5.sub

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


## 31.Match object
span,string,group

这三个函数只能和search函数使用
### 1.span
将会返回第开始和结束的位置
```
import re
txt = "The rain in Spain"
x = re.search("ai",txt)
print(x.span()) #开始的位置是5，结束的位置是7（注意7不包括）
```

### 2.string

```
import re
txt = "The rain in Spain"
x = re.search("ai",txt)
print(x.string) #print是txt的内容，注意string后面没有括号
```

### 3.group

```
import re
txt = "The rain in Spain"
x = re.search("ai",txt)
print(x.group()) #print的是查找到的字符串，注意如果跟下面的正则表达式一起用会返回搜索到的东西，而不是整个字符串
```

## 32.特殊的符号（用来搜索）

### 1.[]

> [a-m]

**中括号里面的只会match一个**

1. [arn]

将会匹配arn

2.[a-n]

将会匹配a-n

3.[^arn]

除了arn开头的都会匹配

4.[0123]

5.[0-9]

6.[0-5][0-9]

代表两位数字，从00到59

7.[a-zA-Z]
 只要是字母就match
 
8.[+]

一些特殊的符号，如果想要match本身的话就这样表示

9.不以xxx开头

> ^[^aeoiu].*

配合search函数，将会找到不以aeiou开头的单词

### 2.\

用来搜索一些特殊符号

1. \A

> "\AThe"

将会匹配开头有这个字符串的字符

注意只会返回string开头的the，也只有开头的the会被返回

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

不是单词的限制，也就是说到这里单词还没完
```
a = "this is a cat."
b = "this is a catalog."
print(re.findall(r"\bcat\B",a)) #这里搜不到，因为cat已经结束了
print(re.findall(r"\bcat\B",b)) #这里搜得到
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

例如

```
import re
print(re.findall(r"\D\D\D","123$$$abc3pm")) #match的是3个字符的string，一个数字都不能有
```

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

7. \S


8. \w 

> "\w" 

只要是 a-z A-Z 0-9 _ 里面的都会被匹配到

9. \W
找非\w的那些字符
```
import re
print(re.findall(r"\w\w\w","123$$$abc3pm")) #这里将会返回123,abc,3pm
print(re.findall(r"\W\W\W","123$$$abc3pm")) #这里将会返回$$$
```

10.\Z

> "Spain\Z"

将会匹配到最后一个单词，也是只会返回最后一个单词

### 3. .

> he..o

match n个长度的string，比如这个例子就回match hello，注意长度是会知道的

### 4.^

> ^hello 

搜索以hello开头的

### 5.$

> planet$

搜寻以planet结尾的

### 6.*

> he.*o

出现零个或者多个，在这里指的是要找一个string，里面包含he，o。中间无论是什么什么东西都会符合。

### 7.+

> he.+o 

出现一个或多个

可以和()一起连用，例子如下：

```
import re
txt = "abcabcabc ababab acacac azzzzz"
print(re.findall(r"\b(abc|ab|ac)+\b",txt)) #这里仅仅会输出abc ab ac 注意+号是把前面整个括号里面的来进行识别，如果不加括号只会匹配c
print(re.findall(r"\b(?:abc|ab|ac)+\b",txt)) #?:做的是不仅仅是输出这些字符串，而是会把整个字符串输出
```
### 8.?

> he.?o 

出现零个或一个

### 9.{}

> he.{2}o

返回出现的具体中间有多少个字符串的字符（就是限定了中间可以出现多少个字符）

例如hello会被返回，heo，helo，helllo都不行

### 10.|

> falls|stays

只要命中任意一个就会返回，注意这个时候要用findall函数，不要用search

### 11.()

```
import re
txt = "heohllhlo"
x = re.findall("h(e|l)o",txt)
print(x)
```

h和o要在e和l前后的，现在要search的时候就是有没有这样的e和l是符合这样的顺序的。

实际上括号里面的是要search的东西，括号外面是条件（围绕的字符串）

**此地方存疑，注意之后复习的时候再搜索**

```
import re
txt = "IMG01.png IMG02.png IMG03.png"
print(re.findall(r"\b(IMG\d+\.png)\b",txt)) #将会返回文件名+扩展名
print(re.findall(r"\b(IMG\d+)\.png\b",txt)) #只会返回文件名
print(re.findall(r"\b(IMG(\d+))\.png\b",txt)) #嵌套，将会返回[('IMG01', '01'), ('IMG02', '02'), ('IMG03', '03')]
```


### 12.针对以上所有的符号一个应用

```
import re
words = ['writer','waiter','newer','imprtant']
start_im = [w for w in words if re.search(r"\Aim",w)]
print(start_im) #将会输出整个字符，而不仅仅是im
```

### 13. search pattern最好都加上"r"

### 14.compile

```
import re
txt = "The rain in Spain"
prog = re.compile("ai")
result = prog.match(txt) # match 和 search基本一样
```
好处是可以search无数个txt，就不需要重复写了


//2022.04.12

## 33.Numpy

### 1.创建一个numpy array

```
import numpy as np
a = np.array([1,2,3,4])
print('a\n',a) #一维array
b = np.array([[1,2],[3,4]])
print('b\n',b) #二维array
c = np.array([[[1,2],[3,4]],[[3,4],[6,8]]])
print('c\n',c) #三维array
```

### 2.创建一个空array

```
empty = np.empty((3,4),dtype=int) #dtype指的是数据类型，(3,4)代表的是3*4的二维矩阵
print(empty) 
```

### 3.创建一个full array

```
full = np.full([3,3],55,dtype=int) #[3,3]指的是3*3的二维矩阵，55指的是默认值
print(full)
```

### 4.arange函数

```
a = np.arange(10) #从0开始，到9（10不包括）
print('a\n',a)
```

```
b = np.arange(2,10,dtype=float) # 从二开始，到0（10不包括），可以指定float）
```

```
c = np.arange(2,3,0.1) #开始的值指定，结束的指定，第三个参数是间隔多少
```

产生的都是一维array

### 5.linspace函数

```
a = np.linspace(1.,4.,6) #第一个是开始，第二个是结束（这个值会取到），第三个是stepsize（也就是会分成几份，这里是从一到六会平均分成六份）
print("a\n",a)
```

### 6.生成随机array

```
from numpy.random import default_rng #rng = random number generate
seed = 42 #这里设定seed
a = default_rng(seed).random((2,2)) # random后的参数是n*n的matrix，seed不传参数的话每次都不一样
print("a\n",a)
```

### 7.产生所有元素都是0或1的array

```
a = np.zeros([5,2],dtype = float) #产生所有都为0的array
print(a)
```

```
b = np.ones([5,2],dtype = float) #产生所有都为1的array
print(b)
```

### 8.eye函数

产生一个单位矩阵

```
a = np.eye(3)
print(a)
```

```
b = np.eye(3,5) #可以不一定是方阵，那么能搞到1的就会搞到1
print(b)
```

### 9.diag函数

传入一个1D array，会转换成一个n*n矩阵

```
a = np.diag([1,2,3])
print(a)
```

若传入的是2D array，就会返回一个1D array（提出对角线的元素）

```
b = np.diag(np.array([[1,2],[3,4]]))
print(b)
```

还有一个参数是k，默认是0，这个值代表偏移

```
a = np.diag([1,2,3],1) #将会产生一个4*4的矩阵，对角线得元素是0，上对角线的才是1，2，3，其实就相当于是在最后一行全加了0
```

```
b = np.diag([1,2,3],-1) #将会产生一个4*4矩阵，对角线的元素是0，下对角线的才是1，2，3，其实就是相当于在第一行全加了0
```

### 10.ndarray

1. ndarray.ndim 

几维的array？

2. ndarray.shape 

array上的维数

3.ndarray.size

array里面有多少个元素

4. ndarray.dtype

描述array里的元素类型

5. ndarray.data

缓存，存的是array里的元素

具体例子

```
a = np.arange(15).reshape(3,5) #arange产生的是一个1D array，reshape将会转换成一个matrix，要保证没有reshape之前和之后是一样的。
print(a.ndim) 
print(a.shape)
print(a.size)
print(a.dtype)
print(a.data[0,0])
print(type(a))
``` 


### 11.基本的操作符

若用基本操作符，是对每个元素都进行操作，并且返回一个新的array

```
a = np.array([20,30,40,50])
b = np.arange(4)

print(a-b)
print(b**2)
print(10*np.sin(a))
print(a<35)
```

### 12.叉乘和点乘

```
A = np.array([[1,1],[0,1]])
B = np.array([[2,0],[3,4]])
print(A*B) #对应位置的元素相乘
print(A@B) #矩阵乘法
print(A.dot(B)) #也是矩阵乘法
```

### 13.全局函数

```
A = np.arange(3)
print(np.exp(A))
print(np.sqrt(A))
```

求和函数

```
a = np.arange(6).reshape(2,3)
print(np.sum(a)) #单纯的把所有数据加起来
print(np.sum(a,axis=0)) #对0这个维度求和（相当于把每一列加起来，竖着来求和）
print(np.sum(a,axis=1)) #对1这个维度求和（相当于把每一行加起来，横着来求和）
print(np.sum(a,axis=0,keepdims=True)) #求和的时候保持维度不变，也就是里面再加一个方括号
print(np.sum(a,axis=0,keepdims=False)) #求和的时候不保持维度不变，默认情况就是false
```

### 14.index, slicing and iterating

```
a = np.arange(15).reshape(3,5)
print(a)
print(a[0,1])
print(a[:,1]) #每一行的第二列
print(a[0:2,1]) #取第二列前两个元素（“2”是不包括）
print(a[1,:]) #取第二行每一列
print(a[1,0:2]) #取第二行前两个数字（“2”不包括）
```

```
print(a[-1]) #代表的是a[-1,:]，也就是把a的最后一行全部取出来
```

允许使用三个点来表示

```
x[1,2,...] 相当于 x[1,2,:,:,:] #假设x是一个五维array
x[4,...,5,:] 相当于 x[4,:,:,5,:]
```

### 15.遍历

```
a = np.arange(15).reshape(3,5)
for row in a:
	print(row) #返回的是1D array
```

如果想要把每一个元素做遍历

```
a = np.arange(15).reshape(3,5)
for ele in a.flat:
	print(ele) 
```

### 14.reshape（一维变高维）

```
a = np.arange(15)
print(a.shape) #
a = a.reshape(3,5) #把他变成3*5matrix
print(a.shape)
```

其有自动补全的功能，第二个参数改变为-1即可

```
a = np.arange(12).reshape(3,-1)
print(a.shape)
```

### 15.把more-D 搞成1D（用ravel函数）

```
a = np.arange(15).reshape(3,5)
print(a.ravel()) #变成1D array
```

### 16.转置

```
a = np.arange(15).reshape(3,5)
print(a.T) #转置
```

### 17.resize

将会直接改变a

```
a = np.arange(15).reshape(3,5)
a.resize(2,6) #这种用法将会改变a
# a.reshape(2.6) 这种用法不会改变a
print(a.shape)
```

### 18.stacking（将数组组合起来）

vstack 意味着垂直堆起来
hstack 意味着水平堆起来

```
from numpy.random import default_rng
a = np.array([[3,4],[6,9]])
b = np.array([[3,2],[1,4]])
c = np.vstack((a,b)) #垂直堆起来（第二个放在第一个下面）
d = np.hstack((a,b)) #水平堆起来（第二个放在第一个旁边）
```

### 19.advanced index


```
a = np.arange(12)**2
i = np.array([1,1,3,8,5]) # 取第2、4、9、6个元素
a[i] #打印结果
```

```
j = np.array([[3,4],[9,7]]) # 取第4、5，10、8的元素，并且返回的是一个2D array。实际上就是一个排列形式，先取出来在排列成这样的形式
a[j]
```

对于2D array也可以这样做，但是取得每一个元素取的实际上对应的是某一行

```
palette = np.array([[0,0,0],[255,0,0,0],[0,255,0],[0,0,255],[255,255,255]])
image = np.array([[0,1,2,0],[0,3,4,0]])
palette[image]
```


```
a = np.arange(12).reshape(3,4)
i = np.array([[0,1],[1,2]])
j = np.array([[2,1],[3,3]])
a[i,j] # i和j必须是一样的形式
a[i,2]
a[:,j]
```
```
i = [0 1       j = [2 1   也就是最后取的是  [a[0,2] a[1,1]
      1 2]          3 3]                     a[1,3] a[2,3]]
```

bool出来将会是1D array

```
a = np.arange(12).reshape(3,4)
b = a > 4
a[b] #这里出来的是1D array
```

### 20.做一些线性代数的操作

```
A = np.array([[6,1,1],[4,-2,5],[2,8,7]])
print(np.linalg.matrix_rank(A)) #计算rank
print(np.trace(A)) #计算trace
print(np.linalg.det(A)) #计算det
print(np.linalg.inv(A)) #计算inv
print(np.linalg.matrix_power(A,3)) 
```

计算norm（所有数值的平方加起来再开根号）

```
from numpy import linalg
a = np.arange(6).reshape(2,3)
print(linalg.norm(a))
print(linalg.norm(a,axis=0)) 
print(linalg.norm(a,axis=1))
```
特征向量，特征值
```
a = np.array([[1,3],[4,6]])
c,d = np.linalg.eig(a) #c是eigen values（特征值），d是eigen vectors（特征向量）
print(c)
print(d)
```
求解线性方程组
```
import numpy as np
a = np.array([[1,2],[3,4]]) #这是等号左边
b = np.array([8,18]) #这是等号右边
print(np.linalg.solve(a,b))
```

//2022.04.19


## 34.collections

> import collections

### 1.namedtuple

> namedtuple(<Name>,<[Names of Values]>)

Name就是名字，[Names of Values]就是一个list

具体举例（第一种创建方法）

```
from collections import namedtuple
book = namedtuple("book",["price","no_of_pages","author"])

harry_potter = book("500","367","JK") #第一个参数就是price，第二个就是no....以此类推

print(harry_potter.price) #第一种访问方式，变量+参数
print(harry_potter[0])
```

第二种创建方法

```
from collections import namedtuple
movie = namedtuple('movie', 'genre rating lead_actor') #第二个参数是一个string，python会自动分开
ironman = movie(genre = 'action', rating = '8.9', lead_actor = 'Robert Downey Jr.') #注意在这里一定要指定什么等于什么
titanic = movie(genre = 'romance' , rating = '8.1', lead_actor = 'Leonardo DiCaprio')
print(titanic.genre) #调用参数
print(ironman.rating)
```

### 2.从fict里面创建nametuple

```
from collections import namedtuple
dictionary = dict({'price':567,'no_of_pages':878,'author':'cathy thomas'})

book = namedtuple('book',['price','no_of_pages','author']) #key必须要一样的才行
print(book(**dictionary)) #两个星星的意思是把dictionary里面的东西全部传到book里面
```

### 3.Counter

实际上是一个dict，有key和value
key是element
value是element出现了多少次

```
from collections import Counter #注意这里的c要大写
numbers = [4,5,5,2,22,2,2,1,8,9,7,7]
num_counter = Counter(numbers) #把要计算的数组放进去，如果要放进string也可以
print(num_counter) #会返回一个dict，类的名字是Counter
```

string也可以这样做

```
from collections import Counter #注意这里的c要大写
string = 'lalalallasfgioudprfhiyewdsf'
string_count = Counter(string)
print(string_count)
```

同样也可以统计一个单词出现了多少次

```
from collections import Counter #注意这里的c要大写
line = "he told her that her presentation was not that good"
list_of_words = line.split() #可以把单词给分开，算出来
line_count= Counter(list_of_words) #统计单词出现的次数
print(line_count)
```

**most_common(top_k) 可以找频率出现最高的**

```
from collections import Counter #注意这里的c要大写
line = "he told her that her presentation was not that good"
list_of_words = line.split() #可以把单词给分开，算出来
line_count= Counter(list_of_words) #统计单词出现的次数
print(line_count.most_common(3)) #可以把出现频率最高的三个列出来，返回的是list of tuple
```

换一种写法，把什么元素出现了多少次写出来

```
from collections import Counter #注意这里的c要大写
string = 'lalalallasfgioudprfhiyewdsf'
string_count = Counter(string)
for c,f in string_count.most_common(3): #此处赋值给两个valuable
	print(f"{c} appears {f} times")
```

### 4.update和subtract（一加一减）

```
from collections import Counter #注意这里的c要大写
food = Counter({"apple":5,"peach":12,"potato":2,"chicken_wing":1}) #用类似dict的形式创建counter
fruit = Counter({"apple":2,"peach"5})
food.update(fruit) #更新
print(food)
```

```
from collections import Counter #注意这里的c要大写
food = Counter({"apple":5,"peach":12,"potato":2,"chicken_wing":1}) #用类似dict的形式创建counter
fruit = Counter({"apple":2,"peach"5})
food.subtract(fruit) #减少
print(food)
```


### 5.ChainMap

```
from collections import ChainMap
dic1={'red':5,'black':1,'white':2}
dic2={"chennai":"tamail","bangalore":"btm"}
dic3={"firstname":"sai","lastname":"kumar"}
my_dict = ChainMap(dic1,dic2,dic3)
my_dict.maps
```

可以使用.keys()和.values()

```
from collections import ChainMap
dic1={'red':5,'black':1,'white':2}
dic2={"chennai":"tamail","bangalore":"btm"}
dic3={"firstname":"sai","lastname":"kumar"}
my_dict = ChainMap(dic1,dic2,dic3)
print(list(my_dict.keys())) #把所有keys打印出来
print(list(my_dict.values()))
```

使用new_child()在已经声明的Chainmap中加入dict

```
from collections import ChainMap
dic1={'red':5,'black':1,'white':2}
dic2={"chennai":"tamail","bangalore":"btm"}
dic3={"firstname":"sai","lastname":"kumar"}
my_dict = ChainMap(dic1,dic2,dic3)

new_dict = {'blue':6,'green':7}
my_chain = my_dict.new_child(new_dict) #添加新字典
print(my_chain)
```

使用reverse反转（因为原来是按顺序放的）

```
from collections import ChainMap
dic1={'red':5,'black':1,'white':2}
dic2={"chennai":"tamail","bangalore":"btm"}
dic3={"firstname":"sai","lastname":"kumar"}
my_dict = ChainMap(dic1,dic2,dic3)
my_dict.maps = reversed(my_dict.maps)
print(my_dict)
```

### 6.defaultdict
避免访问到了不存在的值
```
from collections import defaultdict
def print_default():
	return 'value absent' #这里返回的是如果value不存在就会返回

def_dict = defaultdict(print_default) #这里需要定义一个函数
def_dict["fruit"] = "orange"
print(def_dict["shit"]) #这里会返回value absent，因为这个key不存在
```

### 7.OrderedDict

保持顺序不改变

```
from collections import OrderedDict
ordered_vehicle = OrderedDict()
ordered_vehicle['car'] = 'a'
ordered_vehicle['truck'] = 'b'
ordered_vehicle['van'] = 'c'

#先print原先的顺序
for key,values in ordered_vehicle.items():
    print(key,values)
print("-----------------")
ordered_vehicle['car'] = 'change' #这个地方不会改变顺序
for key, value in ordered_vehicle.items():
    print(key, value)

#但是如果先删除了在添加，就会变化了
print("-----------------")
ordered_vehicle.pop('car')
ordered_vehicle['car'] = 'change2' #这个地方改了之后就会导致顺序变化
for key, value in ordered_vehicle.items():
    print(key, value)
```

## 35.文件操作

### 1.读取操作

```
with open("pi.txt") as file_object: #file_object是变量名，可以改成任意想要的
	contents = file_object.read()

print(contents) #缩进没有在with后面的话，python会自动close掉这个文件
```

也可以指定paths

```
with open("1/pi.txt") as a: #这里使用的是相对路径 
	contents = a.read()
	
print(contents)
```

使用绝对路径

```
file_path = "C:/Users/redapple/Desktop/pi.txt"
# file_path = "C:\\Users\\redapple\\Desktop\\pi.txt" #因为一个斜杠有特殊作用，因此需要两个斜杠

with open(file_path) as a:
	contents = a.read()
	
print(contents)
```

// 2022.04.26

### （补充内容）zip

```
x = [1,2,3]
y = [4,5,6]
for i,j in zip (x,y):
	print(f"{i},{j}")
```

### 2.一行行的读取文件

```
file_name = "pi.txt"
with open(file_name) as file:
	for line in file:
		print(line)
```

### 3.将每一行转换成list

```
file_name = "pi.txt"
with open(file_name) as file:
	lines = file.readlines()

for line in lines:
	print(line.rstrip())
```

### 4.写入一个空文件

```
file = "p.txt"
with open(file,'w') as file:
	file.write("I love you.")
```

如果要换行，记得要再最后加入\n

```
file = "p.txt"
with open(file,'w') as file:
	file.write("I love you.\n")
	file.write("I hate you.\n")
```

注意这样写会直接覆盖掉原来的文件


### 5.append sth

```
file = "p.txt"
with open(file,'a') as file: #这里是a，append mode
	file.write("I love you.\n")
	file.write("I hate you.\n")
```

## 36.Json
> import json
### 1.写入一个json

```
import json
dict = {
	"name" : "shit",
	"fuck" : 2333
}

json = json.dumps(dict,indent=2) #后一个参数是指有多少个元素

with open("test.json","w") as a:
	a.write(json)
```

### 2.读取json文件

```
import json
with open("test.json","r") as a:
	json =  json.load(a)

print(json)
print(type(json)) #类型
```

## 37.CSV

> import csv

### 1.写csv

```
import csv
headers = ["name","age","profession"]
data = [
	["jack",23,"Docter"],
	["Milter",28,"Engineer"]
]
	
with open("people.csv","w") as f:
# with open("people.csv","w",newline='') as f: 有的编译器会在一行后面加上空行，这样子可以避免空行 
	writer = csv.writer(f,delimiter = "\t") #\t指的是用什么来进行分割，如果不加上的话就会默认用逗号分隔
	writer.writerow(headers) #先把标题写上
	writer.writerows(data) #再把data写上
```


### 2.读csv

```
import csv
with open("people.csv","r",)as file:
	reader = csv.reader(file,delimiter = "\t")
	cnt = 0 #从这一行往下的作用是不要把header print出来
	for row in reader:
		if cnt >0:
			print(row)
		cnt +=1
```

### 3.读csv，然后成为dictionary

```
import csv
with open("people.csv","r") as file:
	csv = csv.DictReader(file,delimiter = "\t") #就是这里的函数稍稍有点变化
	for row in csv:
		print(row)
```

### 4.写csv，作为dictionary

```
import csv
with open("test.csv","w") as file:
	fieldnames = ["player_name","fide"]
	writer = csv.DictWriter(file,fieldnames=fieldnames) #前一个fieldnames是固定参数，后一个就是上一个变量名字
	writer.writeheader()
	writer.writerow({"player_name":"a","fide":"b"})
```

## 38.pandas

> import pandas

### 1.创建一个dataframe

```
import pandas as pd
df = pd.DataFrame([[1,2],[4,5],[7,8]], #这是数据，就相当于矩阵一样排列
	index=["cobra","viper","sidewinder"], #index是不可以改变的，相当于是表格竖着的那一堆
	columns = ["max_speed","shield"]) #column也是不可以改变的，相当于是表格横着的那一堆

print(df)

```

输出如下

```
            max_speed  shield
cobra               1       2
viper               4       5
sidewinder          7       8
```

### 2.使用list创建dataframe

```
import pandas as pd
lst = ["Apple","Peach","Pear"]

df = pd.DataFrame(lst) #这样子index和column都是默认的，是一些数字，比如0，1，2
print(df)
```

### 3.使用字典形式，加上list来创建dataframe

```
import pandas as pd
data = {"Name":["Tom","nick","shit","bitch"],
		"Age":[20,14,21,23]} #后面的字典会直接竖着排列在Name的下面
		
df = pd.DataFrame(data)

print(df)
```

### 4.只是读取其中的一些列

```
import pandas as pd
data = {"Name":["Tom","nick","shit","bitch"],
		"Age":[20,14,21,23], #后面的字典会直接竖着排列在Name的下面
		"Sex":["Boy","Boy","Girl","Girl"]}
		
df = pd.DataFrame(data)
print(df[["Name","Sex"]]) #但会的也是一个dataframe，row给的还是默认的名字

```

### 5.处理行和列

```
import pandas as pd
df = pd.DataFrame([[1,2],[4,5],[7,8]], #这是数据，就相当于矩阵一样排列
	index=["cobra","viper","sidewinder"], #index是不可以改变的，相当于是表格竖着的那一堆
	columns = ["max_speed","shield"]) #column也是不可以改变的，相当于是表格横着的那一堆

print(df)
print(df.loc["cobra"]) #使用名字来取，返回的是cobra对应那一行column名字和值
print(df.iloc[0]) #使用位置来取，如果要去第二行，改为1
```

### 6.处理丢失的数据

> np.nan #表示的是not a number，来代表这里没有数据

> df.isnull() 函数来判断数据是否缺少

```
import pandas as pd
import numpy as np
dict = {"First Score":[100,90,np.nan,95],
        "Second Score":[30,45,56,np.nan],
        "Third Score":[np.nan,234,234,54]}
df = pd.DataFrame(dict)
df.isnull() 
```

把所有丢失的数据补上

```
print(df.fillna(0)) #里面的参数是用什么数字来补充
print(df.replace(np.nan,0)) #第一个参数是要替换的东西，第二个参数是要用什么来替换
```

```
df.dropna() #一行一行的扔掉，会把空数据直接扔掉（这里存疑！！）
```

### 7.对每一行做操作

```
import pandas as pd
data = {"Name":["Tom","nick","shit","bitch"],
		"Age":[20,14,21,23], #后面的字典会直接竖着排列在Name的下面
		"Sex":["Boy","Boy","Girl","Girl"]}
		
df = pd.DataFrame(data)

for i,j in df.iterrows():
	print(f"{i}")
	print=(j)
	print()
```

### 8.iteation over columns
```
import pandas as pd
data = {"Name":["Tom","nick","shit","bitch"],
		"Age":[20,14,21,23], #后面的字典会直接竖着排列在Name的下面
		"Sex":["Boy","Boy","Girl","Girl"]}
		
df = pd.DataFrame(data)
column = list(df)

for i in column:
	print(df[i])
	print("\n")
```

### 9.从csv文件中读出来作为panda

```
impoer pandas as pd
pd.read_csv("test.csv",delimiter="\t")
```

### 10.把panda的dataframe写到csv文件

```
import pandas as pd
df = pd.DataFrame([["Jack",24],["Rose",22]],columns = ["Name","Age"])
df.to_csv("test.csv")
```


//Todo:记得找时间重复看8-10，可能有错误

//2022.05.03

### 11.从numpy创建pandas

```
import pandas as pd
import numpy as np

data = np.array(["Apple","Pear","Peach"])
ser = pd.Series(data)
print(ser[:2])
```

可以使用index进行访问

```
import pandas as pd
import numpy as np

data = np.array(["Apple","Pear","Peach"])
ser = pd.Series(data,index=[1,4,5]) #指定index
print(ser[1])

data = np.array(["Apple","Pear","Peach"])
ser = pd.Series(data,index=["red","yellow","pink"]) #指定index，一一对应
print(ser["red"])
```

### 12.从序列中选择数据

```
import pandas as pd
import numpy as np

data = np.array(["Apple","Pear","Peach","Banana","Melon"])
ser = pd.Series(data,index=[1,4,5,8,3])
print(ser.head(3)) #取前三个，不管index怎么样
print(ser[1:3]) #从第二个取到第三个（第四个不包含）
print(ser.loc[3]) #使用index的方式取，在这里就是melon
print(ser.iloc[3]) #取得是第四个，是按照顺序取，不管index
```

## 39.matplotilb

### 1.开始x轴和y轴描点

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints)
plt.show()
```

### 2.默认x值
自动补全，从0，1，2，3，4... 

这里只有两个参数，所以只会补成0-1

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(ypoints)
plt.show()
```

### 3.marker

指定每个点的形状

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints,marker="o")
plt.show()
```

附录

![image](https://user-images.githubusercontent.com/16254644/166445501-583dc1b4-1620-40a1-aaac-3320818575cd.png)

### 4.linestyle

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints,ls="-.")
plt.show()
```

附录：

![image](https://user-images.githubusercontent.com/16254644/166445698-a5597922-7009-404a-96b8-f8a4a5d3af15.png)


### 5.可以改变颜色

附录在上面

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints,c="r")
plt.show()
```

### 6.line width
改变线条的粗细
```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints,linewidth="20.5")
plt.show()
```

### 7.多个线条

```
import matplotlib.pyplot as plt
import numpy as np
y1 = np.array([3,8,1,10])
y2 = np.array([6,2,7,11])

plt.plot(y1)
plt.plot(y2)

plt.show()
```
 
### 8.format strings

> marker|line|color 这是语法

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints,"o:r") #此处
plt.show()
```

### 9.label

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])
plt.plot(xpoints,ypoints)
plt.xlabel("Aver") #key
plt.ylabel("HHHHH") #key
plt.show()
```

### 10.创建一个title

可以使用title()
```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])
plt.plot(xpoints,ypoints)
plt.xlabel("Aver") 
plt.ylabel("HHHHH") 
plt.title("big brother is watching you") #key
plt.show()
```

### 11.更改字体

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

font1 = {"family":"serif","color":"blue","size":20} #key
font2 = {"family":"serif","color":"darkred","size":15} #key

plt.plot(xpoints,ypoints)
plt.xlabel("Aver",fontdict = font1) #key
plt.ylabel("HHHHH",fontdict = font1)#key 
plt.title("big brother is watching you",fontdict = font2) #key

plt.show()
```

### 12.更改标题的位置

参数有 left right center(默认)

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])
plt.plot(xpoints,ypoints)
plt.xlabel("Aver") 
plt.ylabel("HHHHH") 
plt.title("big brother is watching you",loc = "left") #key
plt.show()
```

### 13.使用grid函数

该函数会画出坐标格

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints)

plt.xlabel("Aver") 
plt.ylabel("HHHHH") 
plt.title("big brother is watching you") 

plt.grid() #key
plt.show()
```

### 14.使用grid函数只画横线或者竖线
```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints)

plt.xlabel("Aver") 
plt.ylabel("HHHHH") 
plt.title("big brother is watching you") 

plt.grid(axis = "x") #只需要竖着的线
plt.show()
```

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints)

plt.xlabel("Aver") 
plt.ylabel("HHHHH") 
plt.title("big brother is watching you") 

plt.grid(axis = "y") #只需要横着的线
plt.show()
```

### 15.更改坐标格的各种属性

```
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints,ypoints)

plt.xlabel("Aver") 
plt.ylabel("HHHHH") 
plt.title("big brother is watching you") 

plt.grid(color = "green",linestyle = "--", linewidth = 0.5) #更改各种属性
plt.show()
```

### 16.显示多个点

使用subplot()函数
rows|column|position （可能是错的）
```
import matplotlib.pyplot as plt
import numpy as np

#plot1

x = np.array([0,1,2,3])
y = np.array([3,8,1,10])

plt.subplot(1,2,1) # 1行2列，排在第一个
plt.plot(x,y)

#plot2

x = np.array([0,1,2,3])
y = np.array([10,20,30,40])

plt.subplot(1,2,2)# 1行2列，排在第二个
plt.plot(x,y)

plt.show()
```

另外一个例子

```
import matplotlib.pyplot as plt
import numpy as np

#plot1

x = np.array([0,1,2,3])
y = np.array([3,8,1,10])

plt.subplot(2,2,1) # 2行2列，排在第一象限
plt.plot(x,y)

#plot2

x = np.array([0,1,2,3])
y = np.array([10,20,30,40])

plt.subplot(2,2,2)# 2行2列，排在第二象限
plt.plot(x,y)

#plot3

x = np.array([0,1,2,3])
y = np.array([10,20,30,12312424423234423])

plt.subplot(2,2,3)# 2行2列，排在第三象限
plt.plot(x,y)

#plot4 
x = np.array([0,1,2,3])
y = np.array([10,20,30,23])

plt.subplot(2,2,4)# 2行2列，排在第四象限
plt.plot(x,y)



plt.show()
```


如果要用title，要紧跟在这个函数后面

### 17.super title

```
import matplotlib.pyplot as plt
import numpy as np

#plot1

x = np.array([0,1,2,3])
y = np.array([3,8,1,10])

plt.subplot(2,2,1)
plt.plot(x,y)

#plot2

x = np.array([0,1,2,3])
y = np.array([10,20,30,40])

plt.subplot(2,2,2)
plt.plot(x,y)

#plot3

x = np.array([0,1,2,3])
y = np.array([10,20,30,12312424423234423])

plt.subplot(2,2,3)
plt.plot(x,y)

#plot4 
x = np.array([0,1,2,3])
y = np.array([10,20,30,23])

plt.subplot(2,2,4)
plt.plot(x,y)

plt.suptitle("FUCK YOU") #key
plt.show()
```

### 18.绘制散点图

使用 scatter()函数

```
import matplotlib.pyplot as plt
import numpy as np
x = np.array([3,2,5,6,3245,436,3,234,64,34,23])
y = np.array([3,42,543,123,54,65,234,65,12,43,12])

plt.scatter(x,y)
plt.show()
```

### 19.绘制多个散点图在一个图里

```
import matplotlib.pyplot as plt
import numpy as np
# 1
x = np.array([3,2,5,6,3245,436,3,234,64,34,23])
y = np.array([3,42,543,123,54,65,234,65,12,43,12])
plt.scatter(x,y)

# 2
x = np.array([2,12,234,25,2,123,234])
y = np.array([213,234,5,4,2,12,243])
plt.scatter(x,y)
plt.show()
```

### 20.给每个点不同的颜色看看

```
import matplotlib.pyplot as plt
import numpy as np
x = np.array([3,2,5,6,3245,436,3,234,64,34,23])
y = np.array([3,42,543,123,54,65,234,65,12,43,12])

colors = np.array(["red","blue","green","blue","green","blue","green","blue","green","blue","green"]) #颜色一定要对应多

plt.scatter(x,y,c=colors) #key
plt.show()
```

### 21.可以使用colormaps

```
import matplotlib.pyplot as plt
import numpy as np
x = np.array([3,2,5,6,3245,436,3,234,64,34,23])
y = np.array([3,42,543,123,54,65,234,65,12,43,12])

colors = np.array([0,10,20,30,40,50,60,70,80,90,100]) #key

plt.scatter(x,y,c=colors,cmap = "viridis") #key
plt.show()
```

### 22.更改点的大小

```
import matplotlib.pyplot as plt
import numpy as np
x = np.array([3,2,5,6,3245,436,3,234,64,34,23])
y = np.array([3,42,543,123,54,65,234,65,12,43,12])

sizes = np.array([233,10,20,30,40,50,60,70,80,90,100]) #注意个数要一样多

plt.scatter(x,y,s=sizes) #key
plt.show()
```

### 23.alpha
更改透明度
```
import matplotlib.pyplot as plt
import numpy as np
x = np.array([3,2,5,6,3245,436,3,234,64,34,23])
y = np.array([3,42,543,123,54,65,234,65,12,43,12])

sizes = np.array([233,10,20,30,40,50,60,70,80,90,100])

plt.scatter(x,y,s=sizes,alpha = 0.5) #key
plt.show()
```

### 24.
// 2022.05.10

## 40.面向对象编程

### 1.定义一个类

```
class Coordinate(object): // coordinate是类的名字，object是这个类的父类
	#define attributes here
```

### 2.初始化类： __init__

可以用来初始化一些参数

```
class Coordinate(object):
    def __init__(self, x, y): #第一个参数必须是self
        self.x = x
        self.y = y
```

### 3.使用类

```
class Coordinate(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
		
c = Coordinate(3,4)
origin = Coordinate(0,0)
print(c.x)
print(origin.x) #注意使用"."来进行访问，不要使用()
```

self的参数不要自己串，python会自动传递

### 4.实例：计算两个坐标之间的距离

```
class Coordinate(object):
	def __init__(self, x, y):
		self.x = x
		self.y = y
	def distance(self, other): #第一个参数一定是self
		x_diff_sq = (self.x-other.x)**2
		y_diff_sq = (self.y-other.y)**2
		return (x_diff_sq + y_diff_sq)**0.5
```

具体使用

#### 1.传统方法

```
c = Coordinate(3,4)
zero = Coordinate(0,0)
print(c.distance(zero))
```

#### 2.高级方法（不常用）

```
c = Coordinate(3,4)
zero = Coordinate(0,0)
print(Coordinate.distance(c, zero))
```

### 5.可以自定义 __str__

```
def __str__(self):
	return "<"+str(self.x)+","+str(self.y)+">"
```

### 6.isinstance()

检查某个对象是否是这个类的实例

```
print(isinstance(c,Coordinate))
```

### 7.定义一些基本的操作

```
__add__(self, other) -> self + other
__sub__(self, other) -> self - other
__eq__(self, other) -> self == other
__lt__(self, other) -> self < other
__len__(self) -> len(self)
__str__(self) -> print self
```

### 8.geter和seter

```
class Animal(object):
	def __init__(self, age):
		self.age = age
		self.name = None
	def get_age(self):
		return self.age
	def get_name(self):
		return self.name
	def set_age(self, newage):
		self.age = newage
	def set_name(self, newname=""):
		self.name = newname
	def __str__(self):
		return "animal:"+str(self.name)+":"+str(self.age)

```

// 2022.05.17

期末考试题型：单选题，判断题，完成任务（写代码）题


### 9.一些例子来说明重定义内置参数

例子1（add）:
```
class Coordinate(object):
	def __init__(self, x, y):
		self.x = x
		self.y = y
	def __str__(self):
		return "<"+str(self.x)+","+str(self.y)+">"
	def __add__(self, other):
		return Coordinate(self.x + other.x,self.y + other.y)
```

具体使用

```
c = Coordinate(3,4)
d = Coordinate(5,6)
e = c + d
print(e)
```

### 10.两种方法访问参数

```
a.age
a.get_age()
```

### 11.可以设置默认参数

```
def set_name(self, newname=""):
	self.name = newname
```
### 12.从属关系

parent class：上级，父类
child class：下级，子类

### 13.子类

```
#以下是父类
class Animal(object):
	def __init__(self, age):
		self.age = age
		self.name = None
	def get_age(self):
		return self.age
	def get_name(self):
		return self.name
	def set_age(self, newage):
		self.age = newage
	def set_name(self, newname=""):
		self.name = newname
	def __str__(self):
		return "animal:"+str(self.name)+":"+str(self.age)
#以下是子类
class Cat(Animal):
	def speak(self):
		print("meow")
	def __str__(self): #这里进行了override
		return "cat:"+str(self.name)+":"+str(self.age)
```

子类若没有__init__，则会用父类的init

### 14.关于子类的实例
先决条件：Animal-Person-Student
```
# person类
class Person(Animal):
	def __init__(self, name, age):
		Animal.__init__(self, age)
		self.set_name(name)
		self.friends = []
	def get_friends(self):
		return self.friends
	def add_friend(self, fname):
		if fname not in self.friends:
			self.friends.append(fname)
	def speak(self):
		print("hello")
	def age_diff(self, other):
		diff = self.age - other.age
		print(abs(diff), "year difference")
	def __str__(self):
		return "person:"+str(self.name)+":"+str(self.age)
```

```
# student类
import random
class Student(Person):
	def __init__(self, name, age, major=None):
		Person.__init__(self, name, age)
		self.major = major
	def change_major(self, major):
		self.major = major
	def speak(self):
		r = random.random()
		if r < 0.25:
			print("i have homework")
		elif 0.25 <= r < 0.5:
			print("i need sleep")
		elif 0.5 <= r < 0.75:
			print("i should eat")
		else:
			print("i am watching tv")
	def __str__(self):
		return "student:"+str(self.name)+":"+str(self.age)+":"+str(self.major)
```

### 15.CLASS VARIABLES 

在class后面加上一个变量，是可以修改的

具体例子如下
```
class Rabbit(Animal):
	tag = 1
	def __init__(self, age, parent1=None, parent2=None):
		Animal.__init__(self, age)
		self.parent1 = parent1
		self.parent2 = parent2
		self.rid = Rabbit.tag
		Rabbit.tag += 1 #注意，这是不属于self的，而是属于rabbit类的
``` 

一个更切合实际的例子如下

```
class Rabbit(Animal):
	tag = 1
	def __init__(self, age, parent1=None, parent2=None):
		Animal.__init__(self, age)
		self.parent1 = parent1
		self.parent2 = parent2
		self.rid = Rabbit.tag
		Rabbit.tag += 1
	def get_rid(self):
		return str(self.rid).zfill(3) #zfill在这里强行把它转化为三位数，例如1就会转化为001
	def get_parent1(self):
		return self.parent1
	def get_parent2(self):
		return self.parent2
```

### 16.重定义add

```
def __add__(self, other):
# returning object of same type as this class
	return Rabbit(0, self, other)
```

### 17.可以判断两个是否相等

```
def __eq__(self, other):
	parents_same = self.parent1.rid == other.parent1.rid and self.parent2.rid == other.parent2.rid
	parents_opposite = self.parent2.rid == other.parent1.rid and self.parent1.rid == other.parent2.rid
	return parents_same or parents_opposite
```

// 2022.05.24

## 41.Debug

### 1.try和expect语句

例子：

```
try:
	a = int(input("Tell me one number:"))
	b = int(input("Tell me another number:"))
	print(a/b)
except:
	print("Bug in user input.")
```

还可以加入expect的错误参数

```
try:
	a = int(input("Tell me one number: "))
	b = int(input("Tell me another number: "))
	print("a/b = ", a/b)
	print("a+b = ", a+b)
except ValueError: #这里传入错误类型
	print("Could not convert to a number.")
except ZeroDivisionError: #这里传入错误类型
	print("Can't divide by zero")
except:
	print("Something went very wrong.")
```

### 2.try，except，else，finally

具体例子：
```
def divide(x, y):
	try:
		result = x // y
	except ZeroDivisionError: #有错误就会执行这个
		print("Sorry ! You are dividing by zero ")
	else: #没错误就会执行这个
		print("Yeah ! Your answer is :", result)
	finally: #不管怎么样都会执行这个
		print('This is always executed')
```

### 3.可以使用raise exception来对进行报错
语法：

> raise <exceptionName>(<arguments>)

ValueError 是错误类型，括号内是报错内容

```
raise Exception("descriptive string")
```

具体例子

```
def get_ratios(L1, L2):
	ratios = []
	for index in range(len(L1)):
		try:
			ratios.append(L1[index]/L2[index])
		except ZeroDivisionError:
			ratios.append(float('nan')) #nan = not a number
		except:
			raise ValueError('get_ratios called with bad arg')
	return ratios
```

### 4.assert

```
def avg(grades):
	assert len(grades) != 0, 'no grades data' #逗号前面是条件，如果条件是正确的，就会继续，如果是错的（不符合），程序就会在这里停止，然后把后面一句话print出来
	return sum(grades)/len(grades)
```


