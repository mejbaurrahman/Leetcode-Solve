var lengthOfLastWord = function(s) {
    let reverseS = s.split('').reverse().join('');
    return reverseS
};

const result = lengthOfLastWord("   fly me   to   the moon  ")
console.log(result);