function isPalindrome2(number: number): boolean {

    let temp = number
    let reversed = 0

    if (number<0) return false 

    while (temp>0) {
        reversed = (reversed * 10) + (temp%10)
        temp = Math.floor(temp / 10)
    }

    return number === reversed
}
console.log((isPalindrome2(121)))