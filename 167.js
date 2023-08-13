var twoSum = function(numbers, target) {
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i]+numbers[j]== target){
                return [i+1, j+1]
            }
        }
    }
};

const result = twoSum([2,5,11,15], 7)
console.log(result);