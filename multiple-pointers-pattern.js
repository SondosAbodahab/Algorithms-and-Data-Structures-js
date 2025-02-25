
// o(n) sorted array
// const sumZero = (arr) =>{
   
//     for(let i=0 ; i < arr.length ;i++){
//        let  first = arr[i]
//        let last = arr[arr.length -1 - i]

//         if((first + last) === 0){
//            return [first, last]; 
//         }else{
//             return undefined
//         }
        
//     }
// }

// console.log(sumZero([-3, -2, -1, 0, 1 , 2, 3]))
// console.log(sumZero([1, 2, 3]));

// we want to count every value without counting the repeated ones
// this is o(n²)
// const countUniqueValues =(arr)=>{
//     let count =0;
//     let unique=[];
//     for(const element of arr){ 
//         if(!unique.includes(element)){
//             unique.push(element)
//             count++
//         }
//     }
//     return count
// }

const countUniqueValues =(arr)=>{
    let i =0;
    for(let j = 1; j < arr.length; i++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}
 
// o(n) 
// function countUniqueValues(arr) {
//     return new Set(arr).size;
//   }

console.log(countUniqueValues([1,11,1, 6]));
console.log(countUniqueValues([9,0,9]));