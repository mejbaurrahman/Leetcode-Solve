var finalString = function(s) {
    let part='';
    for(let i=0; i<s.length; i++){
        if(s[i]!=='i'){
            part+=s[i];
        }else{
            part= part.split('').reverse().join('');
        }
    }
    return part
};

const result = finalString("string");
console.log(result);