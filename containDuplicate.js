var containsDuplicate = function(nums) {
    let count;
    for(let i=0; i<nums.length; i++){
        count = 0;
        for(let j=0; j<nums.length; j++){
            if(nums[i] == nums[j]){
                count++
            }
        }
        if(count>1){
            return true;
        }
    }
    return false
};

const result = containsDuplicate([1,1,1,3,3,4,3,2,4,2])
console.log(result);