function plusOne(digits: number[]): number[] {
    let allNines = true
    let shouldIncrementNext = false
    for (let i=digits.length-1;i>=0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            shouldIncrementNext = true
        } else {
            digits[i] += 1
            allNines = false
            shouldIncrementNext = false
            break
        } 
    }

    if (allNines) {
        const result = new Array(digits.length+1).fill(0);
        result[0] = 1
        return result

    }

    return digits
};
// function plusOne(digits: number[]): number[] {
//     let sum = 0
//     let loop = 1
//     for (let i=digits.length-1; i>= 0; i--) {
//         sum += digits[i] * loop
//         loop *= 10
//     }
//     sum+=1
//     const result = sum.toString().split("").map((str)=> Number(str))
//     console.log(result)
//     return result
// };

// plusOne([9,9,9])
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])