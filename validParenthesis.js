var isValid = function(s) {
    const parenthesisMap ={
        '(':')',                            
        '{':'}',                            
        '[':']',                            
    }
    let stack = []
    for(let i=0; i<s.length; i++){
        char = s[i];
        if(parenthesisMap[char]){
            stack.push(char)
        }else{
            let top = stack.pop()
            if(parenthesisMap[top]!=char){
                return false
            }
        }
    }
    return stack.length===0
    
};

const result= isValid("(]")
console.log(result);