function isPalindrome(s: string): boolean {
    const lowerCase = s.toLowerCase().replace(/[^0-9a-zA-Z]+/g, "")
    console.log(lowerCase)

    let left =0;
    let right = lowerCase.length -1
    while (left <right) {
        console.log("l, r ", lowerCase.charAt(left), lowerCase.charAt(right))
        if (lowerCase.charAt(left) !== lowerCase.charAt(right)) {
            return false
        }
        left++
        right--
    }
    return true

};

// const s ="A man, a plan, a canal: Panama"
const s ="0P"
console.log(isPalindrome(s))