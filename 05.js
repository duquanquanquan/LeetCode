let s = "aaaaaa"

let longestPalindrome = function(s) {
    if (s.length === 1) {
        return s
    }
    let maxLen = 1,
        result = [0, 0],
        isPalindrome = [];

    for (let i = 0; i < s.length; i++) {
        isPalindrome[i] = [];
    }

    for (let end = 0; end < s.length; end++) {
        for (let start = 0; start < end; start++) {
            if (s.charAt(start) === s.charAt(end)) {
                if (end - start <= 2 || isPalindrome[start + 1][end - 1] === true) {
                    isPalindrome[start][end] = true;
                    if (end - start + 1 > maxLen) {
                        maxLen = end - start + 1;
                        result = [start, end];
                    }
                }
            }
        }

    }
    return s.slice(result[0], result[1]+1)
};

console.log(longestPalindrome(s));

