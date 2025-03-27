// https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/cpp
// for build: make TASK=password_validator
// for run: ./bin/password_validator

#include <string>
#include <regex>
#include "password_validator/password_validator.h"
#include "test_function.h"

bool password(const std::string &pwd)
{
    // R"(^            Начало строки
    // (?=.*[A-Z])     Должна быть хотя бы одна заглавная буква
    // (?=.*[a-z])     Должна быть хотя бы одна строчная буква
    // (?=.*\d)        Должна быть хотя бы одна цифра
    // .{8,}           Пароль должен быть не короче 8 символов
    // $)"             Конец строки
    std::regex const e{R"(^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$)"};
    return std::regex_match(pwd, e);
}

int main()
{
    testFunction(password, true, "Abcd1234");
    testFunction(password, true, "AbcdefGhijKlmnopQRsTuvwxyZ1234567890");
    testFunction(password, true, "Ab1!@#$%^&*()-_+={}[]|:;?/>.<,");
    testFunction(password, true, " aA1----");
    testFunction(password, true, "4aA1----");
    testFunction(password, false, "Abcd123");
    testFunction(password, false, "abcd1234");
    testFunction(password, false, "abcdABCD");
    testFunction(password, false, "ABCD1234");
    testFunction(password, false, "!@#$%^&*()-_+={}[]|:;?/>.<,");
}
