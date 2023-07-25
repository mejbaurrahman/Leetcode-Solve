var majorityElement = function(nums) {
    let frequencyCount =[]
    let max = 0;
    let item;
    for(let i=0; i<nums.length; i++){
        let count =0;
        for(let j=0; j<nums.length; j++){
            if(nums[i]===nums[j]){
                count++;
            }
        }
        if(count > max){
            max = count;
            item = nums[i] 
        }
    }
    return item;
};

const result = majorityElement([2,2,1,1,1,2,2])
console.log(result);