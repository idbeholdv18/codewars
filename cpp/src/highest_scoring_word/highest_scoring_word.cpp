// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/cpp
// for build: make TASK=highest_scoring_word
// for run: ./bin/highest_scoring_word

#include <string>
#include <sstream>
#include "test_function.h"

std::string highestScoringWord(const std::string &str) {
    std::istringstream iss(str);
    std::string word, best_word;
    int max_score = 0;

    while (iss >> word) {
        int score = 0;
        for (char ch : word) {
            score += ch - 'a' + 1;
        }
        if (score > max_score) {
            max_score = score;
            best_word = word;
        }
    }

    return best_word;
}

int main() {
    testFunction(highestScoringWord, "taxi", "man i need a taxi up to ubud");
    testFunction(highestScoringWord, "volcano", "what time are we climbing up the volcano");
    testFunction(highestScoringWord, "aa", "aa b");
    return 0;
}