

const nums = [1,-2,4,3,-5,6,7,-8];
for (let i = 0; i < nums.length; i++) {
    
    // console.log(nums[i])
        if (nums[i]>6){
            break;
        }
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<0){
        continue;
        }
        console.log(nums[i]);
    }
    
}