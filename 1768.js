var mergeAlternately = function(word1, word2) {
    let l = word1.length; 
    let k = word2.length;
    let word = '';
    let count=0
    for(let i=0; i<(l<=k? l: k); i++){
        word+=word1[i]+word2[i];
        count++;
    }
    if(l!=k){
        for(let j=count; j<(l<k? k: l); j++){
            if(l>k){
                word+=word1[j];
            }else{
                word+=word2[j]
            }
        }
        return word
    }else{
        return word
    }
};

const result = mergeAlternately("ab", "pqrs");
console.log(result);