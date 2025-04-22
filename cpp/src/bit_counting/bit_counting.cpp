// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/cpp
// for build: make TASK=bit_counting
// for run: ./bin/bit_counting

#include <bitset>
#include <string>
#include "test_function.h"

unsigned int countBits(unsigned long long n){
  unsigned char answer = 0;
  while(n) {
    answer += n & 1;
    n >>= 1;
  }
  return answer;
}

int main() {
    testFunction(countBits, 3, 112);
    return 0;
}