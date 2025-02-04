
let charCounter = string => {
    let result = {};

    for(let char of string){

        char =  char.toLowerCase()

        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
          }
    }
    return result;
};


console.log(charCounter('Sondos'));