#include <iostream>
using namespace std;

int leap_year_number(int a, int b) // calculate the number of leap years in [a, b) in O(1) time.
{
	if (b < a) return -1;
	a--; b--;

	int mod4_0_num = b / 4 - a / 4;
	int mod400_0_num = b / 400 - a / 400;
	int mod100_0_num = b / 100 - a / 100;

	return
		(a * b < 0) ? 
		mod4_0_num + mod400_0_num - mod100_0_num + 1
		:
		mod4_0_num + mod400_0_num - mod100_0_num;
}

int main()
{
	cout << leap_year_number(-2020, 5);

	return 0;
}
