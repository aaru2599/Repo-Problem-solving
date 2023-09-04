/**- Write a program to check if a number is a Prime number
 * 
 * Step1:check the condition if number is greater then 2 then we wull run a loop from 2 to less the that number
 * step2:in f condition we will check if the number will divisible with i then the number will be prime number 
 * 
 * 
 * @param {*} num 
 */

let primeNumber=(num)=>{
// let isPrime=true
if((num==2)){
    return true
}
if(num>2){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
        return true
        
    }
}
}
console.log(primeNumber(4));