function hIndex(citations: number[]): number {
    citations.sort((a,b)=> b-a)
    console.log(citations)
    let maxCount = 0
    for (let i=0; i<citations.length; i++) { 
        if (citations[i]>i) maxCount++
        else {
            break
        }
    }
    console.log(maxCount)
    return maxCount
}

hIndex([3,0,6,1,5])