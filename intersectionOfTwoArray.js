var intersection = function(nums1, nums2) {
    let finalArray=[];
   
    for(let i=0; i<nums1.length; i++){
        let count =0
        for(let j=0; j<nums2.length; j++){
            if(nums1[i]==nums2[j]){
                if(finalArray.length>0){
                    for(let k =0; k< finalArray.length; k++){
                        if(nums1[i]== finalArray[k]){
                            count++
                        }
                    }
                    if(count==0){
                        finalArray.push(nums1[i])
                    }
                }else{
                    finalArray.push(nums1[i])
                }
            }
        }
    }
    return finalArray
};

const result = intersection([4,9,5], [9,4,9,8,4])
console.log(result);