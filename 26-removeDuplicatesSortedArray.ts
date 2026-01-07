function removeDuplicates(nums: number[]): number {
    let i = 1

    for (let j = 1; j<nums.length; j++) {
        if (nums[j] !== nums[i-1]) {
            nums[i] = nums[j]
            i++
        }
        
    }
    console.log(nums)
    return i
};


// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([1]))
// console.log(removeDuplicates([1, 2]))