## C++ 临时笔记

### 1.++运算符

a++=a+1

### 2.--运算符

a-- = a-1

### 3.定义一些变量

char x ='a' //字符
string s = "a" //字符串
int y = 3 //整数
float n 1.2121f; //单精度浮点数
double t = 4.223E-2 //双精度浮点数
bool m = true; //布尔量

### 4.基本数据类型

int,double,float,char,bool,*,string（要使用 #include <string>）

### 5.两种获取变量

变量名，变量地址

### 6.bool 输出

bool m = true;
若希望输出true
```
cout << boolalpha;
cout << m <<edl;
```

### 7.setw

此为粘性设置，只能起作用一次

```
cout << setw(10)<<"integer"
```

integer用了七个字符，所以剩下三个字符

使用

```
cout << left
```

进行左对齐

### 8.++ 和别的运算符进行运算

若写为

x = 3
3+x++ 会输出6

因为 3+x,x=x+1

若写为 3+(++x) 则为理想输出

### 9.三元运算符

> x=a<b?a:b

相当于

``` 
if (a<b)
	x=a;
else
	x=b;
```

### 10.一个错误示例

if(c<7);
	cout<<"c is less than 7\n";
	
if 后面不能有逗号，否则永远为真，后面语句不会执行

## 1.3节

### 1.定义的基本架构

```
class student{

}; //类的右半边一定要加分号
```

一般把基本属性设为私有

1.类的名字 2.类的属性 3.类的功能

### 2.const

void后加const可以避免修改

### 3.getline

```
string nameOFCourse // 这是一个函数
getline(cin,nameOFCourse); //可以处理带有空格的数
```

### 4.void

set 使用void
 
### 5.可以在一开始就进行初始化

```
Student(string s,int a,int i){
 name=s;
 age=a;
 id=i;
 }
 
Student stu(TOM,15,170);
```

### 6.计算身高的程序

```
double kidheight( double s, double f,double m)
	double temp;
	if (s == 1)
	temp = ()
	else
```

### 7.注意 不能出现参数不匹配

```
Student(string s,int a,int i){
 name=s;
 age=a;
 id=i;
 }
 
Student stu();
```
则为错误

### 8.括号多重嵌套

```
int main(){
	int i = 5;
	{
		int i = 6;
		cout << i; //此时会是6
	}
	cout << i//此时是5
}
```

### 9.全局变量与局部变量

在Main之前的是全局变量

### 10.explict

```
public GradeBook(string name) //仅针对对于一个函数的构造函数
	: courseName(name) //对其进行初始化
```
 等价于
 
 ```
 GradeBook(string name)
 courseName = name
 ```

### 11.自定义头文件

1.使用.h文件
2.使用 #include "xxx.h"（此处课本已到3.11）

// 10.12
### 12.cout的一些有坑的输出方式

cout << xxx << xxx;

## Chapter 4

### 1.switch

```
switch(expression)
{case const expression 1 :statment1;
case const expression :statment2;

```

不能这样使用，否则会一直执行

在每个语句后面加入break 即可

```
case1:case2: day = xxx; break;
```

注：default后面不用break

若要有两个条件执行同一个语句体

```
case 1
case2 : xxx
```
### 2.循环语句

#### (1)while循环

while(){}

#### (2)do while循环

do{}while()

```
	int i = 5;
		while (i < 50)
		std::cout << i*i;
		i++;
```
有错！ 改为

```
int i;
do{
cout << i*i;
i++;
}while(i<50)
```

#### (3)for循环
```
for(expression1;expression2;expression3)
	loop body;
```

一个转化的实例
```
int i=1;
while(i<50)
{	cout << i*i;
	i++;
}
```

```
for(unsigned int i=0;i<50;i++)
cout <<i;
```

#### (4)特别注意

一个变量的作用域只能在一个大括号里面

// 2020.10.19笔记

### 3.用最大最小值

若为Int，则在前头加入#include<climits>
若为float，则加入 #include<cfloat>

对于int，最大最小值为

INT_MAX INT_MIN

对于浮点数，则该使用

DB_MAX DB_MIN

### 4.showpoint

使用showpoint进行输出小数点

### 5.强制转换double到int

> int y =(int)x //c语言提供

> static_cast<int>(x) //c++原生

### 6.大括号进行初始化

可用

> int i {3};

> int i = {3}

但请注意，不能输入

> int i{3.4}

### 7.一些特殊符号

#### (1) +=

sum += i 等价于 sum = sum+i

例子：

```
int i=1;
int sum = 0;
sum += i++ 
```

等价于
```
sum = sum + i;
i++;
```

#### (2) ::

预操作符

例子：若想去到外面的i
用 > ::i

#### (3) ()

if后面一定要加括号

#### (4) ?:

(条件)?(条件为真结果是这个):(条件为假结果是这个)

例子：

(5>4)?[(4>2)?4:2]:3

[]相当于嵌套

## Chapter5 

### 1.逗号

有逗号先执行后面的语句

### 2.忽略换行符

cin.ignore(100,\n)

### 3.cin.get()

代表取一个字符

### 4.EOF

是一个常量，表示Ctrl+Z（Windows）

### 5.continue

退出当次循环

### 6.goto

无条件跳转

xxx: 
goto xxx

// 10.26
### 7.只有在class类中右括号才加分号

### 8.多个+的逻辑操作

> i+++y

等价于

> i++ +y

## Chapter 6 : Function

### 1.函数的基本定义

```
type functionname(formal parameter list)
{
statements;
}
```
	
### 2.函数的原型

> double max(double, double);

只有此处是分号，而且不一定需要参数，只需要告诉是什么类型即可

### 3.math library 函数

```
ceil(x) --> 去到不小于这个数的最大整数
cos(x) 
exp(x) ---> e的几次方
fabs(x) -->绝对值
floor(x) -->向下取整
fmod(x,y) -->对浮点数取余
log10(x)
pow(x,y)--->x^y
sqrt(x)--->取根号
```

### 4.两个不同的作用域可以用相同的变量

```
double add1(double x,double y)
double add2(double x,double y)
```
是允许的

### 5.substr

name.substr(0,25)

### 6.两个参数一定要单独申明

double x,y是错误写法，正确写法为 double x, double y;

### 7.函数的重载

```
int computeArea(int r){
}

int computeArea(int x,int y){

}
```

具体调用哪个由用户自行定义

> computeArea (3,4)

则会调用下面那个

不管返回类型如何，只要后面参数一样就不行

### 8.构造函数不确定先算左边或是先算右边

```
add(++x,x+y)
```

可能存在歧义，因此要先执行++x的操作

### 9.取随机数（此处为伪随机数）

使用rand函数，包含在<cstdlib>头文件里面

若使用rand()将会取到非常大的数

可以使用

> rand() %6

取到0-5之间的数（使用取余的特性）

若想取10-15的数字，可以使用

> 10 + rand() %6

### 10.设定种子来实现随机数（人为设置）

srand(seed);

这样取得随机数就不同了

### 11.设定种子来实现随机数（系统时间设置）

strand(time(0));

time(0)指的是和1970年经典时间做差

记得#include<ctime>

### 12.enum:枚举类型（C++可能需要加上class）

> enum Status { CONTINUE , WON , LOST}; //相当于一些整型数字

使用方法

> Status gameStatus = CONTINUE;

### 13.改变枚举类型的初值

> enum Months{JAN = 1;FEB,MAR...};

### 14.如果有多个枚举类型，使用双冒号

> enum **class** gameStatue{WIN,LOST}

> Status XXX = GameStatus::PASS;

### 15.使用c++内建的random class

```
#include <random>
default_random_engine engine(static_cast<unsigned int>(time(0)));
uniform_int_distribution<unsigned int> randomInt(1,6); //两边都是闭区间

randomInt(engine); //此为使用
```

### 16.一些数据类型

1.把数据提供到寄存器当中
使用register

2.外界变量
extern

3.静态变量
static
作用域只在函数之间，但是存活期是整个程序，所以数据一直保存着，下一次在进入这个函数的时候，不会在初始化，会使用上一次的数据。
该变量只会被初始化一次

// 2021.11.2

### 17.mutable

若 
```
string getname() const {
mutable int const;
counter = 0;
}
```

则仍然可以修改变量。

### 18.函数的关键词

#### 1. function prototype

函数的原型

> void fun();

#### 2. function header


#### 3.function body

```
void fun(){
} 两个括号之间的
```

大括号括起的叫3

#### 4.function signature

包括函数的名字和参数列表

### 19.Inline function

```
inline double cube(xxx)
{
	return side*side*side;
	}


int maint(){
cout << sube(value) << endl;
```

### 20.&

1.取地址

*(&a)

2. _____ & ______

针对二进制的数

例如 10&1

1100
1001
----
1000

3. alias（声明变量的别名）

int &d=a;

不会给d再分配空间，和a指向的是同一个地址

举例：

```
void test( int &);

cout << test(z) << endl;

void test(int &test){
	test *= test;
}
```

修改了这个test的值相当于修改了z的值

在前面加const 可以让他传值，但是不能修改自己的值

> void test(const int &test)

### 21.Default Argument

```
unsigned int boxValume( int length = 1, int width = 1, int height = 1);
```

定义形式参数的同时给初值

假如这个时候只给了一个参数，那就会有两个默认参数

如果函数有重载，不要给默认值

一定要从最后面的时候给初值，因此如下是错误的

> void derror1(int x,iny y=1,int z);

如下错误 因为有重载

```
void derror2( int x ,int y =0);
void derror2( int x);
ferror2(3);
```


### 22. funcion overloaded

要么参数个数不同，要么函数参数类型不同

**不会看返回类型**

```
int square(int x){
}

double square(double y ){
xxx
}
```
### 23.递归

使用long 可以定义非常大的数字

```
unsigned long factorial(unsigned long);
unsigned long factorial(unsigned long number){
	if(number <=1)
		return 1;
	else
		return number*factorial(number-1);
}
```
//2021.11.09

## Chapter 8 指针+Chapter 7

### 1.使用方法

> int *countptr=NULL; //这个地方的*是用来定义的，不是用来取值的

不能赋值为正数，但是可以写为0

指针变量是一个地址变量

表示这个变量是一个指针，指向的数据类型是一个整型

具体赋值

> int y =5
> yPtr = &y

若要获取y的值,使用*

> *yPtr


### 2.定义指针的多个类型

```
int *iptr
char *see
double *dPtr
```

初始化就是在后面加NULL或者0

### 3.指针之间可以相互复制

```
int *iPtr1
int *Iptr2;

iPtr1 = &i;
iPtr2= iPtr1;
```

### 4.指针交换

略

### 5.alias（声明变量的别名）

```
int a;
int *pa;
int &ra = a;
pa = &a;
```

### 6.const

生命的时候一定要精选一i初始化

> const type * ptr;

或

> type const * ptr;

表示这个指针是一个变量，指向的空间是不可以由他改变的(相似的例子 const int &ref = a)

但是指针可以改到其他的地址（指向其他常量或者是变量空间）

指向的变量自身也是可以更改的（比如更改ptr）

但是不能更改*ptr

> type * const ptr； //常指针

不能指向一个常量的地址，指定一个地址后不能再改变，可以通过*ptr再去改值

> const type * const ptr;

### 7.空指针

> void * ptr =&a;

不要对一个空指针进行间接寻址

但是可以强制类型转换

> *(int*)vp

### 8.传指针

```
void test(int *);
test(&xxx);
void test(int *n)
{
	*n = *n *  *n * *n;
}
```

算完之后 xxx的值改变了

## Chapter7 数组

### 1.array（数组）

声明：

> int a[10];

进行访问

> a[0];

如果要赋初值

> int a[10]={1,2,3};

则a[0]=1 ..... 后面全部被赋0

如果直接写

> int a[10]={0};

全部都会变成0

可以不写元素个数

> int n[] = {1,2,3,4,5,6};

有几个数就能娶几个。

### 2.可以传递数组

最好用size_t 不要用int

> int sum ( int ap[]. int n ){}

传入进来之后就相当于指针

```
int sum ( int ap[], int n ){
	int m = 0;
	for(int i =0;i<n;i++){
	m += *ap; //第一个元素的值
	ap++; //指向下一个元素
}
```

在主函数不能直接a++

### 3.计算数组占有的大小

```
int ap[];
sizeof(ap);
```

当一个数组进入循环（构造函数）之后，当作指针来使用，只占有4个字节

### 
