# 基于 Stack 实现的括号匹配识别器

本程序是使用 C++ 和基于向量自实现栈的括号匹配识别器。支持 `()`、`[]` 与 `{}` 三种括号。

算法渐进效率：输入规模：`n`，算法渐进复杂度：`O(n)`线性.

实例：

```cpp
INPUT: ((a+1)+3)
OUTPUT: MATCH!

INPUT: ((b+2)+1
OUTPUT: NOT MATCH!

INPUT: (b+2)[c+3]{d}
OUTPUT: MATCH!

INPUT: (b+2)[c+3]{d]
OUTPUT: NOT MATCH!

```
