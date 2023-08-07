var detectCapitalUse = function(word) {
    let capital =0;
    let small = 0;
    for(let i=0; i<word.length; i++){
       let check= word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase() ;
       if(!check){
         small++;
       }else{
        capital++;
       }
    }  
    if(small==word.length){
        return true;
    }  
    else if(capital==word.length){
        return true;
    }else if(small == word.length-1 && (word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase())){
        return true;
    }else{
        return false
    }
};

const result = detectCapitalUse("USA");
console.log(result);
