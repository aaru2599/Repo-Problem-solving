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
    if ((k == 1) && (nums.length == 1)) {
        return nums[0]; // Return the only element when k and array length are both 1
    }
    if (k <= 0 || k > nums.length) {
        return 0; 
    } else {
        let max = 0;

        for (let i = 0; i < k; i++) {
            max = Number.MIN_SAFE_INTEGER; 

            for (let j = 0; j < nums.length; j++) {
                if (nums[j] !== null) {
                    if (nums[j] > max) {
                        max = nums[j];
                    }
                }
            }

            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === max) {
                    nums[i] = null; 
                    break; 
                }
            }
        }

        let kthMax = max;
        return kthMax;
    }
}

const nums = [-1, 2, 0];
const k = 3;
console.log(findKthLargest(nums, k));
