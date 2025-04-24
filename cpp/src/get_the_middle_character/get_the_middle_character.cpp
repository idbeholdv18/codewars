// https://www.codewars.com/kata/56747fd5cb988479af000028/train/cpp
// for build: make TASK=get_the_middle_character
// for run: ./bin/get_the_middle_character

#include <bitset>
#include <string>
#include "test_function.h"

std::string get_the_middle_character(std::string input) {
    size_t len = input.length();
    size_t mid = len / 2;
    return input.substr(mid - (len % 2 == 0), (len % 2 == 0) ? 2 : 1);
}

int main() {
    testFunction(get_the_middle_character, "t", "testing");
    testFunction(get_the_middle_character, "ti", "testing!");
    return 0;
}