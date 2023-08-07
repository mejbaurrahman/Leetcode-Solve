var addBinary = function(a, b) {
    const aSplit = a.split('').reverse();
    const bSplit = b.split('').reverse();
    // console.log(aSplit);
    let carry =0; 
    let total =""; 
    if(aSplit.length >= bSplit.length){
        for(let i=0;  i<aSplit.length; i++){
            let x = aSplit[i];
            let y = bSplit[i]? bSplit[i] : '0';
           let sum= parseInt(parseInt(x)+ parseInt(y) + carry); 
            if(sum>=2){
                sum = sum %2;
                carry = 1;
            }else{
                carry = 0;
            }
            total+=sum;
        }
    }else{
        for(let i=0;  i<bSplit.length; i++){
            let x = aSplit[i]? aSplit[i] : '0';
            let y = bSplit[i];
           let sum= parseInt(parseInt(x)+ parseInt(y) + carry); 
            if(sum>=2){
                sum = sum %2;
                carry = 1;
            }else{
                carry = 0;
            }
            total+=sum;
        }
    }
    if(carry){
        total+=carry
    }
    return total.toString().split('').reverse().join('');
};

const result = addBinary("111", "11");
console.log(result);