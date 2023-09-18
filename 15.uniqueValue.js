/**
 * Unique values only from 2 arrays i.e. union values
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
[1, 2, 3, 4, 5, 6, 7, 8];

Step1:Convert two array in a single array with spread
Step2:Iterate the array and check if initial element will match 
        with next then go to next element
step3:If the initial element will not matched then push this element to the empty array
        Here got the unique value array
Step4:Sort this array with Bubble sort technique        
Step5:Return sorted array
 */

const uniqueValue = (inputA, inputB) => {
    // console.log(...inputA,...inputB);
    let arr = [...inputA, ...inputB]

    const uniqueVal = []
    console.log(arr);//[ 1, 2, 3, 4, 5, 1, 1, 2, 3, 4, 5, 1, 7, 6,4, 3, 8]
    for (let i = 0; i < arr.length; i++) {
        let isUnique = true
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                isUnique = false
                // break;
            }
        }
        if (isUnique) {
            uniqueVal.push(arr[i])
            // uniqueVal.sort()
        }
    }
    console.log(uniqueVal);
    for (let i = 0; i < uniqueVal.length; i++) {
        for (let j = 0; j < uniqueVal.length - i - 1; j++) {
            if (uniqueVal[j] > uniqueVal[j + 1]) {
                let temp = uniqueVal[j];
                uniqueVal[j] = uniqueVal[j + 1]
                uniqueVal[j + 1] = temp
            }
        }
    }
    return uniqueVal
}
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
console.log(uniqueValue(inputA, inputB));