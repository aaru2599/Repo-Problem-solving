/**
 * Reverse String with the help of recursion
 * @param {*} num 
 * @param {*} uName 
 * @returns 
 * 
 */
let reverseNum = (num, uName) => {
    let str = "";
    if (num < 0) {
        return "";
    }
    else {
        str = str + uName[num]
        return str + reverseNum(num - 1, uName)
        // return uName[num] + reverseNum(num - 1, uName)
    }
}
const uName = "Arvind"
let len = uName.length
console.log(reverseNum(len - 1, uName));



// let reverseString = (input) => {

//     if (input.length > 1) {
//         return newReverseString(input, 0)

//     }
// }
// let newReverseString = (input, index) => {
//     if (index !== input.length) {
//         return newReverseString(input, index + 1) + input[index]
//     }
// }
// console.log(reverseString("Arvind"));

