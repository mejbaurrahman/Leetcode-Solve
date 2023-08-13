var reverseWords = function(s) {
    s = s.split(' ');
    let sWSpace=[]
    for(let i=0; i<s.length; i++){
        if(s[i]!=''){
            sWSpace.push(s[i])
        }
    }
    for(let i=0, j=sWSpace.length-1; i<sWSpace.length/2; i++, j--){
        let temp= sWSpace[i];
        sWSpace[i]=sWSpace[j];
        sWSpace[j]=temp;
    }
    return sWSpace.join(' ')
};

const result= reverseWords(" the sky is  blue ")
console.log(result);