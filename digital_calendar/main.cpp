// 4-9

#include <iostream>
using namespace std;

class Rectangle
{
public:
	class Point
	{
	public:
		Point(double x, double y) : _x(x), _y(y) {}
		double x() const { return _x; };
		double y() const { return _y; }
	private:
		double _x, _y;
	};
	Rectangle(Point p1, Point p2) : _p1(p1), _p2(p2) {}
	double get_area() const;
private:
	Point _p1, _p2;
};

double Rectangle::get_area() const
{
	return abs(_p1.x() - _p2.x()) * abs(_p1.y() - _p2.y());
}

int main()
{
	Rectangle::Point p1(2, 3);
	Rectangle::Point p2(4, 5);
	Rectangle r(p1, p2);

	cout << r.get_area();
}



// Digital Calendar


#include <iostream>
using namespace std;

class CDate
{
public:
	CDate(int year, int month, int day);
	CDate(CDate&) = default;
	CDate(CDate&&) = default;
	~CDate() = default;


	int get_year() const { return _year; }
	int get_month() const { return _month; }
	int get_day() const { return _day; }

	void add_one_day();
	int date_from_start(int year, int month, int day) const;
	int date_from_now(int year, int month, int day) const;


private:
	int _year, _month, _day;
	const int _month_day_nleap[13] = { NULL, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
	const int _month_day_leap[13] = { NULL, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
	const int _month_day_before_nleap[13] = { NULL, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 };
	const int _month_day_before_leap[13] = { NULL, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 };

	int _leap_year_number(int a, int b) const;
	bool _is_leap_year(int y) const;
	bool _is_last_month() const { return _month == 12; };
	bool _is_last_day() const
	{
		if (_is_leap_year(_year)) return _day == _month_day_leap[_month];
		return _day == _month_day_nleap[_month];
	}
	int _month_day(int year, int month) const
	{
		return _is_leap_year(year) ?
			_month_day_leap[month] : _month_day_nleap[month];
	}
	int _month_day_before(int year, int month) const
	{
		return _is_leap_year(year) ?
			_month_day_before_leap[month] : _month_day_before_nleap[month];
	}


};

int CDate::_leap_year_number(int a, int b) const // calculate the number of leap years in [a, b) in O(1) time.
{
	if (b < a) return -1;
	a--; b--;

	int mod4_0_num = b / 4 - a / 4;
	int mod400_0_num = b / 400 - a / 400;
	int mod100_0_num = b / 100 - a / 100;

	return mod4_0_num + mod400_0_num - mod100_0_num;
}

bool CDate::_is_leap_year(int y) const
{
	if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
		return true;

	return false;
}


CDate::CDate(int year, int month, int day): _year(year), _month(month), _day(day)
{
}

void CDate::add_one_day()
{
	if (_is_last_month() && _is_last_day())
	{
		_year++; _month = 1; _day = 1; return;
	}
	if (_is_last_day() && !_is_last_month())
	{
		_month++; _day = 1; return;
	}

	_day++;

	return;
}


int CDate::date_from_start(int year, int month, int day) const
{
	return 
		_leap_year_number(1, year) * 366
		+ ((year - 1) - _leap_year_number(1, year)) * 365
		+ _month_day_before(year, month)
		+ day - 1;
}


int CDate::date_from_now(int year, int month, int day) const
{
	return date_from_start(year, month, day) - date_from_start(_year, _month, _day);
}


int main()
{
	CDate c(2022, 3, 11);

	char cont;



	while (true)
	{
		cout << " 's' to show today's date; 'a' to add a day; 'd' to calculate days from today; 'q' to exit: ";
		cin >> cont;
		switch (cont)
		{
		case 'a':
			c.add_one_day();
			cout << "Today: " << c.get_year() << "-" << c.get_month() << "-" << c.get_day() << endl;
			break;
		case 'd':
			int y, m, d;
			cout << "Enter a date to calculate (<year> <month> <day>) :";
			cin >> y >> m >> d;
			cout << "The date is " << c.date_from_now(y, m, d) << " days from today." << endl;
			break;
		case 's':
			cout << "Today: " << c.get_year() << "-" << c.get_month() << "-" << c.get_day() << endl;
			break;
		case 'q':
			exit(0);
			break;
		default:
			break;
		}
	}
}
