const validAnagram =(string1 , string2)=>{
    if(string1.length !== string2.length) return false
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    let str1 = string1.toLowerCase()
    let str2 = string2.toLowerCase()

    for(let char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for(let char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    for(let key in frequencyCounter1 ){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
} 

console.log(validAnagram('sondos' , 'sondoS'));
console.log(validAnagram('cat' , 'tac'))
console.log(validAnagram('aaz', 'zza'));