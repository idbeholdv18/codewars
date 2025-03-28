// https://www.codewars.com/kata/514b92a657cdc65150000006/train/cpp
// for build: make TASK=multiples_of_3_or_5
// for run: ./bin/multiples_of_3_or_5

#include <string>
#include "test_function.h"

bool multiples_of_3_or_5(int number)
{
    if (number < 0) return 0;
    long result{0};
    for (int i = 0; i < number; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) result += i;
    }
    return result;
}

int main()
{
    testFunction(multiples_of_3_or_5, 21, 10);
}
