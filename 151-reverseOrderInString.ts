function reverseWords(s: string): string {
    const splittedSentence = s.split(" ").filter(item => item !== "")
    let left = 0
    let right = splittedSentence.length -1
    
    while (left < right) {
        const tempStr = splittedSentence[right]
        splittedSentence[right] = splittedSentence[left]
        splittedSentence[left] = tempStr

        left++
        right--
    }

    return splittedSentence.join(' ')
};
// function reverseWords(s: string): string {
//     const reversedStr = s.split(" ").filter((item) => item !== "").toReversed()
//     console.log(reversedStr)
    
//     let finalSentence = ""
//     for (let i = 0; i < reversedStr.length; i++) {
//         finalSentence += i!== reversedStr.length-1 ? `${reversedStr[i]} ` : `${reversedStr[i]}`
//         console.log("finalSentence: ", finalSentence)
//     }
//     return finalSentence
// };

const str = "a good   example"
// const str = "the sky is blue"



console.log(reverseWords(str))