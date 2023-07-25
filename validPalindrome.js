var isPalindrome = function(s) {
    let convertedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // return convertedS;
    return convertedS === convertedS.split('').reverse().join('')
};

const result = isPalindrome("0P");
console.log(result);