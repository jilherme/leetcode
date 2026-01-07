function majorityElement(nums: number[]) {
    let majorityCount = 0
    let res = 0

    for (const num of nums) {
        if (majorityCount === 0) {
            res = num
        }
        
        majorityCount += res === num ? 1 : -1

        
    }
    return res
}

const nums = [3,2,3]
majorityElement(nums)