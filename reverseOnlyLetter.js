var reverseOnlyLetters = function(s) {
    // let flag= /^[A-Za-z]$/.test()
    let sr = s.split('').reverse()
    let srStr=''
    for(let i=0; i<sr.length; i++){
        if(/^[A-Za-z]$/.test(sr[i])){
            srStr+=sr[i];
        }
    }
    let finalStr=[];
    let index=[];
    
    for(let j=0; j<s.length; j++){
        if(!/^[A-Za-z]$/.test(s[j])){
            index.push(j);
        }
    }
    let srp = srStr.split('') ;
    for(let i=0; i<index.length; i++){
        srp.splice(index[i], 0, s[index[i]]).join('');
    }
    
    return srp.join('')

    
};

function  sliceWithIndex(str, indices){
    const result = [];
    let startIndex = 0;

    for (const index of indices) {
        if (index >= startIndex && index < str.length) {
            result.push(str.slice(startIndex, index));
            startIndex = index;
        }
    }

    if (startIndex < str.length) {
        result.push(str.slice(startIndex));
    }

    return result;
}

const result = reverseOnlyLetters("a-bC-dEf-ghIj");
console.log(result);