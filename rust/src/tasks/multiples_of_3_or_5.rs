pub fn multiples_of_3_or_5(num: i32) -> i32 {
    if num < 0 {
        return 0;
    }

    (0..num)
        .filter(|&n| n % 3 == 0 || n % 5 == 0)
        .sum()
}
