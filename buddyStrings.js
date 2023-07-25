var buddyStrings = function(s, goal) {
    // if(s.length !== goal.length){
    //     return false
    // }
    // const diffIndices = []
    // const diffChars = []
    // //let count =0;
    // for(let i=0; i< s.length; i++){
    //     if(s[i]!==goal[i]){
    //         // count++
    //         diffIndices.push(i)
    //         diffChars.push(s[i])
    //     }
    // }
    // // if(count==0){
    // //     return 
    // // }
    // if(diffIndices.length !== 2){
    //     return false;
    // }
    // return (diffChars[0]===goal[diffIndices[1]] && diffChars[1] ===goal[diffIndices[0]])
    if (s.length !== goal.length) {
        return false;
      }
    
      const diffIndices = [];
      const diffChars = [];
    
      for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
          diffIndices.push(i);
          diffChars.push(s[i]);
        }
      }
    
      if (diffIndices.length !== 2) {
        return false;
      }
    
      return (
        diffChars[0] === goal[diffIndices[1]] && diffChars[1] === goal[diffIndices[0]]
      );
};

const result = buddyStrings("aa", "aa")
console.log(result);