// A function that takes two arrays and
//  check if  every value it's squared value in the second array

const same =(arr1, arr2)=>{ 
    if(arr1.length !== arr2.length){
        return false
    }
    let hasValue =[]

    for (const num of arr1) {
      hasValue.push(arr2.includes(num * num ))
    }
    return hasValue.every((val)=> val === true)
}

console.log(same([1, 2, 3], [3]));
console.log(same([1, 2, 3], [1,4,9]))
console.log(same([3,4], [9, 2]));
