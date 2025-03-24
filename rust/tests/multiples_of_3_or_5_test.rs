use codewars::tasks::multiples_of_3_or_5::multiples_of_3_or_5;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sum_of_multiples() {
        assert_eq!(multiples_of_3_or_5(10), 23);
        assert_eq!(multiples_of_3_or_5(20), 78);
        assert_eq!(multiples_of_3_or_5(0), 0);
        assert_eq!(multiples_of_3_or_5(-5), 0);
    }
}