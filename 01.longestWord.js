function longestWordInString(input) {
    let longestWord = "";
    let newInput = input.split(" ");
  
    for (let i = 0; i < newInput.length; i++) {
      if (newInput[i].length > longestWord.length) {
        longestWord = newInput[i];
      }
    }
  
    return longestWord;
  }
  
  console.log(longestWordInString("My Name is Arvind and I'm from Chhindwara"));
  