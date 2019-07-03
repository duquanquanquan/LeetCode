let lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length
    }
    let start = 0, //不重复字符串起始位置
        length = 0; //不重复字符串目前最长长度
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if ( map[s.charAt(i)] === undefined) {
            map[s.charAt(i)] = i;
        } else {
            if (map[s.charAt(i)] >= start) {
                start = map[s.charAt(i)] + 1;
            }
            map[s.charAt(i)] = i;
        }


        length = (i - start + 1 > length) ? i - start + 1 : length
    }
    return length
};
