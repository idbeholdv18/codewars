use codewars::tasks::vowel_count::get_count;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sum_of_multiples() {
        assert_eq!(get_count("abracadabra"), 5);
    }
}
