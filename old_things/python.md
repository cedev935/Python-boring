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
```
