/**
 * 
 * @param {*} input 
 * @returns 
 * step1:first we need to iterate the all element
 * step2:we need to check the element if it is array then we will 
 *       pass the array element into the main function 
 * step2.1:iterate the element and and push into the empty array      
 * step3: else we will push the element into the new empty array  
 */

let flatterArray=(input)=>{
let emptyArray=[]

for(let i=0;i<input.length;i++){
    let elem=input[i]
    if(Array.isArray(elem)){
        let newArray=flatterArray(elem)
          for(let j=0;j<newArray.length;j++){
            emptyArray.push(newArray[j])
          }
        }
        
    else{
        emptyArray.push(input[i])
    }
    }
    return emptyArray
}

const example = [1,2,3,4, [1,2], [3,4, [3,4]] , 5]
console.log(flatterArray(example));
