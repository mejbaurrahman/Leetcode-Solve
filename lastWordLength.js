var lengthOfLastWord = function(s) {
    s= s.trim()
    words = s.split(' ')
    const lastWord = words[words.length-1]
    return lastWord.length
};

const result = lengthOfLastWord("Hello World")
console.log(result);