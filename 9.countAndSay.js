/**if
 * 
 * @param {*} n 
 * @returns 
 * step1:if input is 1 then return 1
 * step2:create function for recursion
 *       declared variable result and count we wil give count is 1 for initial count    
 * step3:run for loop iterate the string and check
 *       if initial value is equal to next value then count will be increase
 *       otherwise it will store the count concate with that last element in result
 * step4:return the result
 *       
 */

var countAndSay = function(n) {
  if(n==1){
    return "1";
  }
  function say (n){
    let result="";
    let count=1;
    for(let i=0;i<n.length;i++){
        if(n[i]===n[i+1]){
            count++;
        }
        else{
            result=result+count+n[i]
            count=1;
        }
    }
    return result
}
return say(countAndSay(n-1))
    
};

console.log(countAndSay(10));