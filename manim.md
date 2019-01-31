# Usage Reference

Created: Jan 31, 2019 7:15 AM
Tags: manim,math

1. 一个标准开头实例

    from big_ol_pile_of_manim_imports import *
    

2. 定义一个场景(Scene)

    class SceneName(Scene):
        def construct(self):
        # Animation

3. 基本图形

    # In a scene
    circle = Circle()
    square = Square()
    line = Line(np.array([3,0,0]), np.array([5,0,0]))
    triangle = Polygon(np.array([0,0,0]), np.array([1,1,0]), np.array([1,-1,0]))

4. 图形的显示(Play)

    # In a construct
    self.add(line)
    self.play(ShowCreation(circle))
    self.play(FadeOut(circle))
    self.play(GrowFromCenter(square)) # 
    self.play(Transform(square, triangle)

- 使用 numpy 数组 np.array() 指定坐标
- 使用 add() 以非动画形式放置对象
- 一些基本图形定义在 [geometry.py](https://github.com/3b1b/manim/blob/master/manimlib/mobject/geometry.py)
- 如果希望同时播放多个动画，应把它们作为一个 self.play() 中以逗号分隔的参数

5. 方向向量

- 方向向量的基本单位是 MUnit
- 以 numpy 数组定义一个向量
- 默认屏幕高度 8 MUnits 宽度 14.2 MUnits
- 基本方向向量 LEFT, DOWN, IN, OUT, RIGHT
- 每个屏幕侧的中心边缘矢量 TOP, BOTTOM, LEFT_SIDE, RIGHT_SIDE
- Circle 类有一个方法 surround() 用于创建一个完全包含另一个 mobject 的圆
- 使用 .next_to 指定对象位置(靠近另一个对象)

6. 创建文本

    # In a construt
    my_first_text = TextMobject("Writing with manim is fun")
    second_line = TextMobject("and easy to do!")
    second_line.next_to(my_first_text, DOWN) # locate
    third line = TextMobject("for me and you!")
    third_line.next_to(my_first_text, DOWN)
    
    self.add(my_first_text, second_line)
    self.wait(2)
    self.play(Transform(second_line, third_line))
    self.wait(2)
    second_line.shift(3 * DOWN) # DOWN as a vector
    self.play(ApplyMethod(my_first_text.shift, 3 * UP))

- 上面的代码，second_line 会直接到达底部，而 my_first_text 会缓慢移动到上部 这是因为使用了 self.play(ApplyMethod()) 方法
- self.wait() 方法暂停动画一段时间，时间由参数决定

7. 更改文本

    # In a construct
    quote = TextMobject("Imagination is more important than knowledge")
    quote.set_color(RED)
    quote.to_edge(UP)
    quote2 = TextMobject("A person who never made a mistake never tried anything new")
    quote2.set_color(YELLOW)
    author = TextMobject("-Albert Einstein")
    author.scale(0.75)
    author.next_to(quote.get_corner(DOWN + RIGHT), DOWN)
     
    self.add(quote)
    self.add(author)
    self.wait(2)
    self.play(Transform(quote,quote2), ApplyMethod(author.move_to, quote2.get_corner(DOWN + RIGHT) + DOWN + 2 * LEFT))
    self.play(ApplyMethod(author.scale, 1.5))
    author.match_color(quote2)
    self.play(FadeOut(quote))

- 使用 set_color() 改变文本颜色
- 使用 match_color() 匹配另一个对象的颜色
- 使用 scale() 对文本进行缩放
- to_edge() 接受参数 UP, DOWN, LEFT, RIGHT 将 mobjects 与屏幕边缘中心对齐
- to_corner() 接收类似于 UP + LEFT 参数将 mobjects 移动到角落
- Transform() 动画让 mobjects 本身不变，而改变属性，所以 FadeOut() 仍需要 quote 作为参数(而不是 quote2)
- get_corner() 接受参数，返回 Mobjects 边框点的坐标

8. A Few More Things

- VGroup 类可以将多个 mobject 组成一个矢量化数学对象 以此将任何 VMobject 方法应用于组内所有元素
- VGroup 中原对象的属性仍然可以更改，VGroup 只不过是更高级的 Mobjects 分组
- next_to() 方法可以认为是相对其他对象的位移

9. 数学方程

- 在 TeXMobject 中，假设字符串都是 LaTex 字符串，在 TextMobject 中，假设字符串都是文本字符串，除非使用美元符号定义 LaTex 字符串
- 在 Python 中，使用 r"..." 表示原字符串，这样可以避免重复输入反斜杠
- Write() 是 ShowCreation() 的子集，需要在 Play() 内部设置为动画

10. 对齐

    class UsingBracesConcise(Scene):
        def construct(self):
        eq1_text = ["4","x","+","3","y","=","0"]
        eq2_text = ["5","x","-","2","y","=","3"]
        eq1_mob = TexMobject(*eq1_text)
        eq2_mob = TexMobject(*eq2_text)
        eq1_mob.set_color_by_tex_to_color_map({
            "x":RED_B,
            "y":GREEN_C
        })
        eq2_mob.set_color_by_tex_to_color_map({
            "x":RED_B,
            "y":GREEN_C
        })
        for i, item in enumerate(eq2_mob):
        item.align_to(eq1_mob[i],LEFT)
        eq1 = VGroup(*eq1_mob)
        eq2 = VGroup(*eq2_mob)
        eq2.shift(DOWN)
        eq_group = VGroup(eq1, eq2)
        braces = Brace(eq_group,LEFT)
        eq_text = braces.get_text("A pair of equations")
     
        self.play(Write(eq1),Write(eq2))
        self.play(GrowFromCenter(braces),Write(eq_text))

- 使用 align_to() 排列 eq1 和 eq2 元素的左边缘
- 星号解压缩列表并将其作为 TeXMobject 的参数

11. 绘图与坐标轴

    class PlotFunctions(GraphScene):
        CONFIG = {
            "x_min": -10,
            "x_max": 10,
            "y_min": -1.5,
            "y_max": 1.5,
            "graph_origin": ORIGIN ,
            "function_color": RED ,
            "axes_color": GREEN,
            "x_labeled_nums": range(-10, 12, 2),
        }
        def construct(self):
            self.setup_axes(animate = True)
            func_graph = self.get_graph(self.func_to_graph, self.function_color)
            func_graph2 = self.get_graph(self.func_to_graph2)
            vert_line = self.get_vertical_line_to_graph(TAU, func_graph,color=YELLOW)
            graph_lab = self.get_graph_label(func_graph, label = "\\cos(x)")
            graph_lab2 = self.get_graph_label(func_graph2, label = "\\sin(x)", x_val=-10, direction=UP/2)
            two_pi = TexMobject("x = 2 \\pi")
            label_coord = self.input_to_graph_point(TAU, func_graph)
            two_pi.next_to(label_coord, RIGHT + UP)
     
            self.play(ShowCreation(func_graph), ShowCreation(func_graph2))
            self.play(ShowCreation(vert_line), ShowCreation(graph_lab), ShowCreation(graph_lab2), ShowCreation(two_pi))
     
        def func_to_graph(self,x):
            return np.cos(x)
     
        def func_to_graph2(self,x):
            return np.sin(x)

- CONFIG 用于指定坐标轴的性质，默认值在 [graoh_scene.py](https://github.com/3b1b/manim/blob/master/manimlib/scene/graph_scene.py) 中
- 使用 get_graph_label() 标记与图形关联的文本，但也需要 add() 或 play() 显示
- input_to_graph_point() 非常有用，此方法以 x 值作为参数，返回该点 manim 屏幕坐标
