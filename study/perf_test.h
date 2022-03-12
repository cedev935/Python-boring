#pragma once
#include <chrono>


template<typename Func, typename... TArgs>
double GetHighResFuncRunTime(Func func, TArgs... args)
{
	std::chrono::high_resolution_clock highResClock;

	auto start = highResClock.now();
	func(args...);
	auto end = highResClock.now();

	std::chrono::duration<double> funcRunDuration = end - start;

	return funcRunDuration.count();
}
