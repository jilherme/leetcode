/* Given a positive integer n, 
write a function that returns the number of set bits in its binary representation 
(also known as the Hamming weight).

Example 1:
Input: n = 11
Output: 3

Explanation:
The input binary string 1011 has a total of three set bits. */

function hammingWeight(n: number): number {
    const binary = convertToBinaryReversed(n)
    console.log(binary)
    let bitSet = 0
    for (const char of binary) {
        if (char === "1") bitSet++
    }

    return bitSet
};

function convertToBinaryReversed(n:number): string {
    let binaryReversed = ""
    let tempN = n

    while (tempN>0) {
        binaryReversed += tempN % 2
        tempN = Math.floor(tempN/2)
    }
    
    return binaryReversed
}

console.log(hammingWeight(11))