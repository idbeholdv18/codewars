// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/cpp
// for build: make TASK=snail
// for run: ./bin/snail

#include <vector>
#include "test_function.h"

#include <vector>

// 0.0 0.1 0.2 0.3
// 1.0 1.1 1.2 1.3
// 2.0 2.1 2.2 2.3
// 3.0 3.1 3.2 3.3

// 0.0 - 0.1 - 0.2 - 0.3 --- 3.3 - 3.2 - 3.1 - 3.0 --- 

// (s=0, e=0) 0.0, 0.1, 0.2, 0.3 - 1.3, 2.3, 3.3
// (s=1, e=2) 3.2, 3.1, 3.0 - 2.0, 1.0

#include <vector>

std::vector<int> snail(const std::vector<std::vector<int>> &snail_map)
{
    if (snail_map.empty() || snail_map[0].empty()) return {};

    size_t size = snail_map.size();
    int top = 0, bottom = size - 1;
    int left = 0, right = size - 1;

    std::vector<int> res;
    res.reserve(size * size);

    while (res.size() < size * size) {
        for (int i = left; i <= right; ++i)
            res.push_back(snail_map[top][i]);
        ++top;
        for (int i = top; i <= bottom; ++i)
            res.push_back(snail_map[i][right]);
        --right;
        if (top <= bottom) {
            for (int i = right; i >= left; --i)
                res.push_back(snail_map[bottom][i]);
            --bottom;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; --i)
                res.push_back(snail_map[i][left]);
            ++left;
        }
    }

    return res;
}

int main()
{
    testFunction(snail, {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16}, {{1,2,3,4}, {12,13,14,5}, {11,16,15,6}, {10,9,8,7}});
    return 0;
}