var reverseVowels = function(s) {
    const sSplit = s.split('');
    let indexNumber = [];
    for(let i=0; i<sSplit.length; i++){
        if((sSplit[i]=='a')|| (sSplit[i]=='e') ||(sSplit[i]=='i')||(sSplit[i]=='o')|| (sSplit[i]=='u')|| (sSplit[i]=='A')|| (sSplit[i]=='E') ||(sSplit[i]=='I')||(sSplit[i]=='O')|| (sSplit[i]=='U')){
            indexNumber.push(i);
        }
    }
    let sSplitReverse = s.split('').reverse();
    let j=0;
    for(let i=0; i<indexNumber.length; i++){
        while(true){
            if((sSplitReverse[j]=='a')|| (sSplitReverse[j]=='e') ||(sSplitReverse[j]=='i')||(sSplitReverse[j]=='o')|| (sSplitReverse[j]=='u')|| (sSplitReverse[j]=='A')|| (sSplitReverse[j]=='E') ||(sSplitReverse[j]=='I')||(sSplitReverse[j]=='O')|| (sSplitReverse[j]=='U')){
                sSplit[indexNumber[i]]= sSplitReverse[j]
                j++;
                break;
            }
            j++;
        }
    }
    return sSplit.join('')
};

const result = reverseVowels("leetcode")
console.log(result);
