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

const input = "[]()";
console.log(isValid(input)); // Output: true
