// A function that takes two arrays and
//  check if  every value it's squared value in the second array

// o( n^2 )
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let hasValue = [];

  for (const num of arr1) {
    hasValue.push(arr2.includes(num * num));
  }
  return hasValue.every((val) => val === true);
};

// console.log(same([1, 2, 3], [3]));
// console.log(same([1, 2, 3], [1,4,9]))
// console.log(same([3,4], [9, 2]));

// with frequency counter
// o( n )
const sameFrequency = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
      
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    // if (frequencyCounter1[num]) {
    //   frequencyCounter1[num]++;
    // } else {
    //   frequencyCounter1[num] = 1;
    // }
    // || default operator here means that if the value is 
    // falsy set it to 0  it's shorthand of commented code above
    frequencyCounter1[num] = (frequencyCounter1[num] || 0)  + 1
  }
  for(let num of arr2){
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
  }
  
//   O (1) loop
  for(let key in frequencyCounter1){
      if(frequencyCounter1[key] !== frequencyCounter2[key**2]){
        return false
      }
  }
  return true
};
console.log(sameFrequency([1, 2, 3], [3]));
console.log(sameFrequency([1, 2, 3], [1, 4, 9]));
console.log(sameFrequency([3, 2], [9, 4]));
console.log(sameFrequency([3, 3, 4], [9, 2]));
