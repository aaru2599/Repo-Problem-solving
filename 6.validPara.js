/**
 * 
 * @param {*} s 
 * @returns 
 * step1:we have to convert string into array
 * step2:check if length or array is odd then its not a valid paranthesis
 * step3:else we iterate the array and check if element is match with "(","["and "{"
 *          then we will push the elements into the new array 
 * step4:we will store  the last element into a variable 
 *        after that we will check if that element is our given paranthesis and the emidiate next is matching 
 *          with ")","}"and "]" then remove the last element
 * Step5:if there is not any element in new array then return true
 */


var isValid = function (s) {
    let arr = s.split("");
    let newArr = [];
    if (arr.length % 2 !== 0) {
        return false
    }
    else {

        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i]
            if (elem === "(" || elem === "[" || elem === "{") {
                newArr.push(elem)
                // console.log(newArr);
            }
            else {
                if (newArr.length == 0) {
                    return false
                }

                let lastPara = newArr[newArr.length - 1];
                if ((elem === ")" && lastPara === "(") || (elem === "}" && lastPara === "{") || (elem === "]" && lastPara === "[")) {
                    newArr.pop();

                }
                else {
                    return false
                }
            }

        }
    }
    return (newArr.length == 0)

};

const input = "[()";
console.log(isValid(input)); // Output: true
