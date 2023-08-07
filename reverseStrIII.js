var reverseWords = function(s) {
    let words = s.split(' ');
    let newWords=""
    for(let i=0; i<words.length; i++){
        let word= words[i].split('').reverse().join('');
       
        newWords+=word+(i!==words.length-1 ? ' ':'');
    }
    return newWords;
};

const result = reverseWords("Let's take LeetCode contest");
console.log(result);