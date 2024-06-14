
const lengthOfLongestSubstring = (s) => {
    var set = new Set();
    var longestCount = 0;
    var left = 0;
    var right = 0;
    while(right < s.length) {
        var letter = s[right];
        if(!set.has(letter)){
            set.add(letter);
            longestCount = Math.max(longestCount, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return longestCount;
}


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));