#include <iostream>
#include <sstream>
#include <algorithm>
#include "test_function.h"

std::string spinWords(const std::string& str) {
    std::istringstream iss(str);
    std::ostringstream oss;
    std::string word;
    
    while (iss >> word) {
        if (word.length() >= 5) {
            std::reverse(word.begin(), word.end());
        }
        if (!oss.str().empty()) {
            oss << " ";
        }
        oss << word;
    }
    return oss.str();
}

int main()
{
    testFunction(spinWords, "Hey fellow warriors", "Hey wollef sroirraw");
    testFunction(spinWords, "Burgers are my favorite fruit", "sregruB are my etirovaf tiurf");
    testFunction(spinWords, "Pizza is the best vegetable", "azziP is the best elbategev");
}