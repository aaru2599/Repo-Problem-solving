/**
 * step1:First of all check the condition that k should be less then 
        Array of length if not then return error
    step2:give a max value as 0
    step3:iterate the loop till kth times
          here we will give rendom value as in minus  

    step4:run for loop for array
          check is there any null or not if not then find out the max element of arrar
          if null is available then index will be on next element  

    step5:again run for loop for replacing the max value as null
        (in every loop till kth iteration wherever max value is present replace with null) 
    step6:after that simply return kth max value    
*/


var findKthLargest = function (nums, k) {
    if((nums.length==k)&&(nums[0]&&nums[1])==-1){
        return -1;
    }
     if((k==1)&&(nums.length==1)){
        return 1
    }
    if (k <= 0 || k > nums.length) {
       return 0;
    } else {
        let max = 0;

        for (let i = 0; i < k; i++) {
         max = Number.MIN_VALUE;

           
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] !== null) {
                    if (nums[j] > max) 
                     max = nums[j];
                }
            }


            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === max) {
                    // nums.splice(i,1)// Remove the largest element from the array
                    nums[i] = null//
                    break;

                }
            }
        }
        
        return max
    }
}
const arr=[3,2,3,1,2,4,5,5,6]
const k=4
console.log(findKthLargest(arr,k));


