// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/cpp
// for build: make TASK=maximum_subarray_sum
// for run: ./bin/maximum_subarray_sum

#include <vector>
#include "test_function.h"

int maxSequence(const std::vector<int> &arr)
{
    int curr_sum = 0;
    int max_sum = 0;

    for (int i : arr) {
        curr_sum += i;
        if (curr_sum < 0) curr_sum = 0; else max_sum = std::max(max_sum, curr_sum);
    }

    return max_sum;
}

int main()
{
    testFunction(maxSequence, 6, std::vector<int>{-2, 1, -3, 4, -1, 2, 1, -5, 4});
    return 0;
}