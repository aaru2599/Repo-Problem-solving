/**- Write a program to create a factorial of number
There Are many more ways to solve the problem i tryed with two

=======first one=========
 * Step1:create a arrow function and pass thr num as parameter
 * step2:check the condition if number will equal to 0 0r 1 then return 1 or true
 * step3:else return that number and call the function with decreasing a parametr(here i use recursion )
 * 
 * 
 * ===========Second Approach===================
 * step1:As usual i create a function 
 * step2:declear a variable result and initialize with one that will help us to multiply the num
 * step3:run a loop from that num to 1
 *      Inside the loop multiply that num with result
 * step4:return that result variable
 */


//===========First approach==================
let factorialOfNum = (num) => {
    if ((num === 0)||(num===1 )){
        return 1;
    }
    return num*factorialOfNum(num - 1)
       }
console.log(factorialOfNum(5));




//===========Second approach==================
let createFactorial=(num)=>{

    let result=1;
    for(i=num;i>0;i--){
        // console.log(i);
        result=result*i
    }
    return result
}
console.log(createFactorial(5));