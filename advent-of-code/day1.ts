// receive document with instructions
// dial starts at 50
// goes from 0 to 99
const path = "./advent-of-code/day1-input";
const file = Bun.file(path);

const text = await file.text();

type Instruction = ["L" | "R", number];

async function decipherVaultPassword(document: string) {
    // console.log(document)
    const documentLines = document.split('\n')
    
    let currentDialPosition = 50 // starts at 50
    let sumOfZeroes = 0

    // instantiate array with 100 elements
    const dialNumbers = Array.from(Array(100).keys())
    for (const line of documentLines) {
        const lineInfo: Instruction = [line[0] as "L" | "R", Number(line.substring(1))]
        const rotation = lineInfo[0]
        let numberOfRotations = lineInfo[1]
        console.log(lineInfo)

        if (numberOfRotations > 99) {
            numberOfRotations = numberOfRotations % 100
        }
  
        // will stay at 0, so doesnt count to the sum
        if (numberOfRotations === 0) continue

        
        if (rotation === "L") {
            let newPosition = currentDialPosition - numberOfRotations 
            console.log("newposition R:", newPosition)

            if (newPosition < 0) {
                newPosition %= 100 
                // newPosition *= -1
            }

            
            currentDialPosition = dialNumbers.at(newPosition)
        } else { 
            let newPosition = currentDialPosition + numberOfRotations 
            console.log("newposition R:", newPosition)
            if (newPosition > 99) {
                newPosition %= 100
                // newPosition *= -1
            }

            currentDialPosition =  dialNumbers.at(newPosition)
        }

        console.log("new currentDialPosition:", currentDialPosition)
        
        if (currentDialPosition === 0) {
            sumOfZeroes += 1
        }
    }

    console.log(sumOfZeroes)
}

decipherVaultPassword(text)

export {}