function addBinary(a: string, b: string) {
    let allOnes = true
    let shouldIncrementNext = false

    const aLength = a.length
    const bLength = b.length
    let biggestStr = aLength
    let smallerStr = null
    if (aLength > bLength) {
        biggestStr = aLength
        smallerStr = bLength
    } 
    if (aLength < bLength) {
        biggestStr = bLength
        smallerStr = aLength 
    }

    const newStr = ""
    for (let i=1; i< length; i++) {
        const outOfBounds = smallerStr ? i>= smallerStr : null  


        if (!outOfBounds) {
            const a1 = a.charAt(i*-1) === "1" 
            const b1 = a.charAt(i*-1) === "1" 

            // compare from last to first
            if (a1 === b1) { // 0 === 0 vai dar true
                shouldIncrementNext = true
            } 
            if (a1 !== b1) {
                if (shouldIncrementNext) 
            }
            
        }
    }

}

console.log(addBinary("1010", "1011"))