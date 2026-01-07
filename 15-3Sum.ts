type Triplet = [number, number, number]

function threeSum(nums: number[]): number[][] {
  let triplets: Triplet[] = []

  nums.sort((a, b) => a - b)

  if (nums.length<3) return triplets

  for (let i=0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue
    let j = i + 1
    let k = nums.length - 1


    while (j < k) { 
      let curSum = nums[i] + nums[j] + nums[k]
      if (curSum < 0) j++
      else if (curSum > 0) k--
      else {
        triplets.push([nums[i], nums[j], nums[k]])
        j++
       
        while (nums[j] === nums[j-1] && j<k) j++
      }
    }
  }

  console.log(triplets)
  return triplets
}

// threeSum([-1, 0, 1, 2, -1, -4, 2]);
// threeSum([0,0,0,0]);
threeSum([-100, -70, -60, 110, 120, 130, 160])
// type Triplet = [number, number, number]

// function threeSum(nums: number[]): number[][] {
//     let i = 0
//     let j = 1
//     let k = 2
//     let triplets = []

//     while (i < nums.length -2) {
//         while (j < nums.length -1) {
//             while (k < nums.length) {
//                 const numI = nums[i]
//                 const numJ = nums[j]
//                 const numK = nums[k]
//                 if ((numI + numJ + numK) === 0) triplets.push([numI, numJ, numK])
//             }
//         }
//     }

//     return triplets
// };
