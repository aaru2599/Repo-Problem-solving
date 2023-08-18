/**
 * 
 * 
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 * step1:Firsl of all create 2 container, first will accept all positive elements
 *       And second willl be acceept negative element 
 * step2:seperate the negative and positive value based on index that element will become the index of that array
 *       It will be sort by-default when we put the element as index and that element will become one
  *      If the element present is present in that index then element will be add with 1
  * step3:run a for loop for positive arra
  *       check if element is not empty then reduce the k with the element
  *       and if the k is less then or 0 then we got the element and simply return i
  * step4:will do same above step for negative array also but weneed to return the negative element 
  *       so we will return -i
  *   
 */ 


var findKthLargest = (nums, k) => {
  const positivenums = [];
  const negativenums = [];

  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i];

    if (currentVal >= 0) {
      const valOnCurrentIndex = positivenums[currentVal] || 0;
      positivenums[currentVal] = valOnCurrentIndex + 1;
    } else if(currentVal<0){
      currentVal = Math.abs(currentVal);
      const valOnCurrentIndex = negativenums[currentVal] || 0;
      negativenums[currentVal] = valOnCurrentIndex + 1;
    }
   
  }
  console.log(positivenums);

  let matches = k;

  for (let i = positivenums.length ; i >= 0; i--) {
    if (positivenums[i]!==undefined ) {
      matches = matches-positivenums[i];
      if (matches <= 0) {
        return i;
      }
    }
  }

  for (let i = negativenums.length ; i >= 0; i--) {
    if (negativenums[i]!==undefined ) {
      matches =matches-negativenums[i];
      if (matches <= 0) {
        return -i;
      }
    }
  }
  return null; // kth largest value not found
};


const nums=[0,0,3,3,1,5,6,4,-4,-6,-7,-5]
  const k=10
  console.log(findKthLargest(nums,k));
