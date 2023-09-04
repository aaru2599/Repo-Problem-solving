/**
 * 
 * @param {*} matrix 
 * @returns 
 * step1:flat the matrix //[1,2,3,4,5,6,7,8,9]
 * step2:push the element rotate by 90deg //[1,4,7,2,5,8,3,6,9] 
 * step3:divide in to given part //[[1,4,7],[2,5,8],[3,6,9]]
 * step4:reverse that element inside the matrix
 * 
 */


var rotate = function(matrix) {
    let flatterArray=matrix.flat();
    // return flatterArray
    // console.log(matrix.length);
    let len=matrix.length;
    let newArr=[]
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<flatterArray.length;j=j+len){
            newArr.push(flatterArray[j])
        }
    }

//   console.log(newArr);
    var newArr1=[]
    for(let i=0;i<newArr.length;i+=len){
        newArr1.push(newArr.slice(i,i+len));
    }
console.log(newArr1);
for(let i=0;i<newArr1.length;i++){
    newArr1[i].reverse()
}

return newArr1

}
const matrix=[[1,2,3],[4,5,6],[7,8,9]]
// const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(rotate(matrix));