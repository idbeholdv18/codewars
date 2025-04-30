// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/cpp
// for build: make TASK=beeramid
// for run: ./bin/beeramid

#include <bitset>
#include <string>
#include "test_function.h"

int beeramid(int bonus, double price)
{
    int cans = bonus / price;
    int level = 0;
    
    while (cans >= (level + 1) * (level + 1)) {
        level++;
        cans -= level * level;
    }
    
    return level;
}

int main() {
    testFunction(beeramid, 16, 5000, 3);
    testFunction(beeramid, 12, 1500, 2);
    return 0;
}