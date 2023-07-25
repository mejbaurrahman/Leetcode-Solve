var singleNumber = function(nums) {
 
    let min = 10000;
    let item;
    for(let i=0; i<nums.length; i++){
        let count =0;
        for(let j=0; j<nums.length; j++){
            if(nums[i]===nums[j]){
                count++;
            }
        }
        if(count < min){
            min = count;
            item = nums[i] 
        }
    }
    return item;
};

const result = singleNumber([4,1,2,1,2]);
console.log(result);