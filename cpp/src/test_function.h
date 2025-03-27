#ifndef FUNCTION_TESTER_H
#define FUNCTION_TESTER_H

#include <iostream>
#include <functional>

template <typename Func, typename... Args>
bool testFunction(Func func, const typename std::invoke_result<Func, Args...>::type& expected, Args... args) {
    auto result = func(args...);
    if (result == expected) {
        std::cout << "Test passed!\n";
        return true;
    } else {
        std::cout << "Test failed: expected " << expected << " but got " << result << "\n";
        return false;
    }
}

#endif