var isAnagram = function(s, t) {
    const tSplit = t.split('');
    const sSplit = s.split('');
    if(s.length !== t.length){
        return false
    }
    for(let i=0; i<sSplit.length; i++){
        if(t.indexOf(sSplit[i])==-1){
            return false
        }
    }
    for(let i=0; i<tSplit.length; i++){
        if(s.indexOf(tSplit[i])==-1){
            return false
        }
    }
    return true
};

const result = isAnagram("ab","a")
console.log(result);