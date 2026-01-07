/**
Reverse bits of a given 32 bits signed integer.

Example 1:
Input: n = 43261596
Output: 964176192
 */
function reverseBits(n: number): number {
    const numberInBinary = convertToBinaryReverse(n)
    const numberInDecimal = convertToDecimal(numberInBinary)

    return numberInDecimal
};

/* decimal 4
4 / 2 = 2,  remainder 0
2/2 = 1, remainder 0
1/2 = 0, remainder 1

binary = 100, inverse order of remainders
*/
function convertToBinaryReverse(decimal: number): string {
    let tempDecimal = decimal
    let binary = ""

    while (tempDecimal > 0) {
        binary += tempDecimal % 2
        tempDecimal = Math.floor(tempDecimal / 2)
    }

    while (binary.length < 32) {
        binary += '0'
    }

    return binary
}
// console.log(convertToBinary(4))

function convertToDecimal(binary: string): number {
    let decimalNumber = 0
    let power = 0
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            decimalNumber += 2 ** power
        }
        power++
    }

    return decimalNumber
}

console.log("reverseBits: ",  reverseBits(43261596))