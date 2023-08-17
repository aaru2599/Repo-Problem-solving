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

            const index = nums.indexOf(max);
            // nums.splice(index, 1); 
            nums[index]=null
        }

        
        return max;
    }
}

const nums =
[-3858,-536,3182,5894,4366,9983,8440,2314,4264,-1169,4047,-7462,5345,-1731,-2497,-2576,8459,-5433,7300,5924,-2342,-7517,5061,-9984,4186,-1527,-5492,6967,1772,-6623,5629,2778,-1313,4403,6419,-1094,1426,-1566,1063,-7225,3262,-2211,-9285,-3245,-2364,3862,-337,-8012,-6620,7491,6256,-7364,9256,4563,-5225,-4012,1072,-391,-8543]
const k = 3;
console.log(findKthLargest(nums, k));
