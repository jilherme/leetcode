import { sleep } from "bun"

function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length-1
    
    
    while (left <=right){ 
   
    let mid = Math.floor(left + right / 2)
    let midValue = nums[mid] 
    console.log("[index, value]:", `${mid} ${midValue}`)
    if (target === midValue) return mid

    // caso esteja entre posicao meio e meio-1
    if (target < midValue && target> nums[mid-1]) return mid

    if (target > midValue && target < nums[mid+1]) return mid+1
    if (target < midValue) right = mid-1

    if (target > midValue) left = mid+1
} 
}

// function searchInsert(nums: number[], target: number): number {
//     let found = false
//     let index = Math.floor(nums.length / 2) 
//     let finalIdx = nums.length-1
//     for (let i=0; i<nums.length; i++) {
//         console.log(index)
//         if (target === nums[index]) return index
//         if (target < nums[index]) {
//             console.log("menor")

//             finalIdx = index
//             index = Math.floor(index / 2)
//             continue
//         } 
//         if (target > nums[index]) {
//             console.log("maior")
//             index = Math.floor((index + nums.length) /2)
//             continue
//         }
//         if (target > nums[index] && target < nums[index+1]) {
//             console.log("oii")
//             return index+1
//         }

//     }
// };


// function searchInsert(nums: number[], target: number): number {
//     //1. ver se o targe existe
//     //2. se n existir, ver onde é maior que X index, e menor que X+1
//     for (let i =0; i<nums.length; i++) {
//         if (target === nums[i]) {
//             return i
//         } 

//         if (target < nums[0]) {
//             return 0
//         }
//         if (target > nums[i] && target < nums[i+1]) {
//             return i+1
//         } 
//         if (i === nums.length -1) {
//             return nums.length
//         }
//     }
// };
console.log(searchInsert([1,3,5,6], 5))