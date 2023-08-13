var firstPalindrome = function(words) {
    let flag= false;
    for(let i =0; i<words.length; i++){
        let j=0;
        let k= words[i].length-1;
        let count = 0;
        while(j<k){
            if(words[i][j] !== words[i][k]){
                count++;
                break;
            }else{
                j++;
                k--;
            }
        }
        if(count==0){
            flag= true;
            return words[i]
        }
    }
    if(!flag){
        return ''
    }
    
};

const result = firstPalindrome(["notapalindrome","racecar"])
console.log(result);