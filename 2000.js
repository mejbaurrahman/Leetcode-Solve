var reversePrefix = function(word, ch) {
    let count =0;
    let flag= false;
    let newWord=''
    for(let i=0; i<word.length; i++){
        if(word[i]==ch){
            flag=true;
            newWord+=word[i];
            count++
            break;
        }else{
            newWord+=word[i];
            count++
        }
    }
    if(count == word.length && flag==false){
        return newWord;
    }else{
        newWord=newWord.split('')
        for(let j=0, k=newWord.length-1; j<Math.floor(newWord.length/2); j++, k--){
        let temp = newWord[j];
        newWord[j]= newWord[k]
        newWord[k]= temp
        }
        newWord= newWord.join('')
        if(newWord.length<word.length)
       {
        for(let i=count; i<word.length; i++){
            newWord+=word[i]
        }
       }
        return newWord
    }
};

const result = reversePrefix('abcdefd', 'd');
console.log(result);