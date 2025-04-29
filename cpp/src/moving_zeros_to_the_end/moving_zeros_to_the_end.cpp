// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/cpp
// for build: make TASK=moving_zeros_to_the_end
// for run: ./bin/moving_zeros_to_the_end

#include <vector>
#include "test_function.h"

std::vector<int> move_zeroes(const std::vector<int> &input)
{
    std::vector<int> ans;
    int zeros_count = 0;
    for (int i : input)
    {
        if (i != 0)
            ans.push_back(i);
        else
            zeros_count++;
    }
    ans.insert(ans.end(), zeros_count, 0);
    return ans;
}

int main()
{
    testFunction(move_zeroes, std::vector<int>{1, 2, 1, 1, 3, 1, 0, 0, 0, 0}, std::vector<int>{1, 2, 0, 1, 0, 1, 0, 3, 0, 1});
    testFunction(move_zeroes, std::vector<int>{0, 0, 0, 0, 0, 0}, std::vector<int>{0, 0, 0, 0, 0, 0});
    testFunction(move_zeroes, std::vector<int>{1, 2, 5, 1, 5, 1, 5, 3, 2, 1}, std::vector<int>{1, 2, 5, 1, 5, 1, 5, 3, 2, 1});
    return 0;
}