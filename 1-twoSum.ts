function twoSum(nums: number[], target: number): number[] {
    // value: key - map
    const hashMap = new Map<number, number>([[nums[0], 0]])
    let targetSumIdxs = [0,0]

    for (let i=1; i<nums.length; i++) {
        const differenceTargetCurNumber = target - nums[i]
        if (hashMap.has(differenceTargetCurNumber)) {
            targetSumIdxs = [hashMap.get(differenceTargetCurNumber)!, i]
            break
        } else {
            hashMap.set(nums[i], i)
        }
    }

    // console.log(targetSumIdxs)
    return targetSumIdxs
};


// const nums = [3,2,4]
const nums = [3,3]
// const nums = [3,2,3]
twoSum(nums, 6)
