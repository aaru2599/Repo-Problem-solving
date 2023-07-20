// Program to find longestWord in String 
// Step1: We have to convert this string into seperated word for that 
// we have to use split method
// Step2:after that we will create one empty variable
// Step3:After that we will check the length of every word with empty 
// variable if it will greater then that then we will strore that word in 
// empty variable


function longestWordInString(input) {
    let longestWord = "";
    // breaking the string into seperated array of word
    let newInput = input.split(" ");
    // iterating every element with for loop
    for (let i = 0; i < newInput.length; i++) {
        if (newInput[i].length > longestWord.length) {
            longestWord = newInput[i];
        }
    }

    return  longestWord;
}

console.log(longestWordInString("My Name is Arvind and I'm from Chhindwara"));
