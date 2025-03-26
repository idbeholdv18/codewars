pub fn get_count(string: &str) -> usize {
    let mut vowels_count = 0;
    for (i, c) in string.chars().enumerate() {
        if ['a', 'e', 'i', 'o', 'u'].contains(&c) {
            vowels_count += 1
        };
    }
    vowels_count
}
