// C++ 期末大作业留档

#include<iostream>
#include<vector>
#include<queue>
#include<windows.h>
#include<conio.h>
using namespace std;


// 画字符函数，为了生成迷宫动态解决的前置函数.
void draw(int x, int y, char c, int offset_x = 0, int offset_y = 0)
{
	COORD position;
	position.X = x + offset_x;
	position.Y = y + offset_y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), position);
	cout << c;
}

// 获取当前光标位置，为了不覆盖除了迷宫的其他输出而准备.
COORD get_current_coord()
{
	CONSOLE_SCREEN_BUFFER_INFO cbsi;
	if (GetConsoleScreenBufferInfo(GetStdHandle(STD_OUTPUT_HANDLE), &cbsi))
		return cbsi.dwCursorPosition;
	else return COORD{ 0,0 };
}

// 清屏函数，为了与用户交互.
void clear_screen(char fill = ' ') {
	COORD tl = { 0,0 };
	CONSOLE_SCREEN_BUFFER_INFO s;
	HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);
	GetConsoleScreenBufferInfo(console, &s);
	DWORD written, cells = s.dwSize.X * s.dwSize.Y;
	FillConsoleOutputCharacter(console, fill, cells, tl, &written);
	FillConsoleOutputAttribute(console, s.wAttributes, cells, tl, &written);
	SetConsoleCursorPosition(console, tl);
}

class Maze;
class MazeNode
{
	friend class Maze;
public:
	MazeNode(bool connected, int x, int y) :
		is_connected(connected), is_visited(false), x(x), y(y),
		connected_node(vector<MazeNode*>()) {};

private:
	bool is_visited;
	bool is_connected;
	int x, y;
	vector<MazeNode*> connected_node;
};


class Maze
{
	friend class MazeNode;
public:
	Maze(const vector<vector<MazeNode>>& input_nodes);
	Maze(const vector<vector<int>>& input_nodes);
	MazeNode& get_begin() { return nodes.front().front(); }
	MazeNode& get_end() { return nodes.back().back(); }
	int shortest_length() { if (!is_bfsed) bfs(); return shortest_paths.size(); }
	bool has_solution() { return shortest_length() != 0; }
	void bfs();
	void print_solution();
private:
	vector<vector<MazeNode>> nodes;
	int width, length;
	bool is_bfsed;
	vector<MazeNode> shortest_paths;
};

Maze::Maze(const vector<vector<MazeNode>>& input_nodes) : 
	nodes(input_nodes), width(input_nodes.size()), length(input_nodes[0].size()),
	is_bfsed(false), shortest_paths(vector<MazeNode>())
{
}

Maze::Maze(const vector<vector<int>>& input_nodes) :
	nodes(), width(input_nodes.size()), length(input_nodes[0].size()), 
	is_bfsed(false), shortest_paths(vector<MazeNode>())
{
	for (int i = 0; i < width; i++)
	{
		nodes.push_back(vector<MazeNode>());
		for (int j = 0; j < length; j++)
			nodes[i].push_back(MazeNode(!input_nodes[i][j], i, j));
	}
	for (int i = 0; i < width; i++)
		for (int j = 0; j < length; j++)
		{
			if (i > 0) nodes[i][j].connected_node.push_back(&nodes[i - 1][j]);
			if (j > 0) nodes[i][j].connected_node.push_back(&nodes[i][j - 1]);
			if (i < width - 1) nodes[i][j].connected_node.push_back(&nodes[i + 1][j]);
			if (j < length - 1) nodes[i][j].connected_node.push_back(&nodes[i][j + 1]);
		}
}

void Maze::bfs() // 广度优先搜索(BFS) 查找最短路径
{
	if (!nodes[0][0].is_connected) { is_bfsed = true; shortest_paths = vector<MazeNode>(); return; }
	queue<vector<MazeNode>> path; // 由于需要找出整条路经，不止需要记录当前节点，也需要记录到节点的所有路径.
	vector<MazeNode> begin;
	begin.push_back(get_begin());
	path.push(begin);
	nodes.front().front().is_visited = true;
	while (!path.empty())
	{
		vector<MazeNode> nowpath = path.front(); path.pop();
		MazeNode nownode = nowpath.back();
		if (nownode.x == width - 1 && nownode.y == length - 1)
		{
			shortest_paths = nowpath;
			is_bfsed = true;
			return;
		}
		for (auto p = nownode.connected_node.begin(); p != nownode.connected_node.end(); p++)
		{
			if ((*p) -> is_visited || !(*p)->is_connected) continue;
			vector<MazeNode> newpath = nowpath;
			newpath.push_back(**p);
			(*p)->is_visited = true;
			path.push(newpath);
		}
	}
}

void Maze::print_solution()
{
	if (!has_solution()) return;
	int offset_x = get_current_coord().X;
	int offset_y = get_current_coord().Y;
	for (int i = 0; i < length; i++)
	{
		for (int j = 0; j < width; j++)
			draw(i, j, nodes[j][i].is_connected ? '0' : '1', offset_x, offset_y);
		cout << endl;
	}
	for (auto p = shortest_paths.begin(); p != shortest_paths.end(); p++)
	{
		if (p == shortest_paths.begin())
		{
			draw(p->y, p->x, 'S', offset_x, offset_y); Sleep(512); continue;
		}
		if (p + 1 == shortest_paths.end())
		{
			draw(p->y, p->x, 'E', offset_x, offset_y); Sleep(512); continue;
		}
		draw(p->y, p->x, '#', offset_x, offset_y);
		Sleep(512);
	}
}

int home_page()
{
	clear_screen();
	cout << "##### 迷宫求解程序 - 2022 年 高级程序设计基础 - 大作业 ####" << endl;
	cout << "输入 1: 查看示例迷宫的求解过程和结果." << endl;
	cout << "输入 2: 在控制台输入一个迷宫，若有解，给出其最短路径图与相关信息." << endl;
	cout << "输入 3: 关于本程序" << endl;
	cout << "输入 4: 退出程序" << endl;

	int ctr;
	cout << "请输入 >> ";
	cin >> ctr;
	return ctr;
}

void example_maze()
{
	clear_screen();
	vector<vector<int>> v = {
	{0,1,1,0,0,1,1,0,0,1},
	{0,1,0,0,0,0,1,1,1,0},
	{0,0,1,0,1,0,0,1,1,1},
	{1,0,0,0,1,0,1,0,1,0},
	{1,1,1,1,1,0,0,0,1,0},
	{1,0,1,1,0,0,0,1,0,0},
	{0,1,1,1,1,1,0,0,0,0},
	{0,0,0,1,1,1,1,1,1,0}
	};
	Maze q(v);
	q.print_solution();
	cout << endl;
	cout << "该迷宫有解。最短解的示意图如上，其中 # 表示路径，S 为起点，E 为终点。最短路径总长 " << q.shortest_length() - 1 << endl;
	cout << "按任意键回到主页 >> ";
	_getch();

}

void input_maze()
{
	clear_screen();
	cout << "请输入一个迷宫，具体要求如下：" << endl;
	cout << "迷宫应包含至少 1 行与 1 列，行与列数目可以不必相等. 入口位置为左上角，出口为右下角." << endl;
	cout << "用 1 表示障碍，0 表示畅通. 请在除最后一行每行的结束加上 # 以示行之间的间隔，请在最后一行的结束后加上 ^ 以示结束." << endl;
	cout << "所有字符请用空格分隔." << endl;
	vector<vector<int>> v;
	v.push_back(vector<int>());
	while (true)
	{
		char c;
		cin >> c;
		if (c == '^') break;
		if (c == '#') { v.push_back(vector<int>()); continue; }
		v.back().push_back(int(c) - 48);
	}
	Maze q(v);
	if (!q.has_solution())
	{
		cout << endl;
		cout << "输入迷宫无解." << endl;
		cout << "按任意键回到主页 >> ";
		_getch();
		return;
	}
	clear_screen();
	q.print_solution();
	cout << endl;
	cout << "该迷宫有解。最短解的示意图如上，其中 # 表示路径，S 为起点，E 为终点。最短路径总长 " << q.shortest_length() - 1 << endl;
	cout << "按任意键回到主页 >> ";
	_getch();
	return;
}

void about()
{
	clear_screen();
	cout << "本程序与报告由 ### 和 ### 在 2022 年 5 月完成." << endl;
	cout << "感谢 清华大学《数据结构》在线课程 对本程序迷宫寻路算法的启发" << endl;
	cout << "按任意键回到主页 >> ";
	_getch();
	return;
}

int main()
{
	while (true)
	{
		int ctr = home_page();
		switch (ctr)
		{
		case 1:
			example_maze();
			continue;
		case 2:
			input_maze();
			continue;
		case 3:
			about();
			continue;
		case 4:
			exit(0);
		default:
			break;
		}
	}
	return 0;
}
