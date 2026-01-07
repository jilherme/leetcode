function romanToInt(s: string): number {

    // IX = 9
    // XIX = 19
    let sum = 0
    for (let i =0; i<s.length; i++) {
        const valueCurChar = mapChars[s[i]]
        if( i<s.length-1 && valueCurChar < mapChars[s[i+1]]) {
            sum -= valueCurChar
        } else {
            sum += valueCurChar
        }
    } 

    return sum
}

    const mapChars: { [key: string]: number } = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
