function isPalindrome(x: number) {
    let reversed = 0
    let temp = x

    if (x<0) return false

    while (temp != 0) {
        reversed = (reversed * 10) + (temp % 10)
        console.log("reversed: ", reversed)
        temp = Math.floor(temp/10)
        console.log("temp: ", temp)
        console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")
    }

    return reversed === x
}

// console.log(isPalindrome(-121))
console.log(isPalindrome(12121))

/* 
x = 121
i=0
remainder = 121 % 10 = 121/10 => resto **1** 
reversed = 0 * 10 + 1
temp = 12, divide por 10 e diminui uma casa 
==================================
i=1 
remainder = 12 % 10 = 12 /10 resto **2** 
reversed = 1 * 10 + 2 = 10 + 2 = 12
.....

*/