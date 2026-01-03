// // FOR EACH
// let result = [];
// let nums =  [2,3,4,5,6,7,8,7,8,11,22]

// // +2 on even number and +5 on odd
// let  i =0;
// for( i =0;i<=nums.length;i++){
//     if(nums=[i] %2==0){
//         nums[i]+2
//         result.push(nums[i])
//     }
//     else{
//         nums[i]+5
//         result.push(num[i]);
//     }
// }
// console.log()



//  shorthand for for each loop



let nums = [2, 3, 4, 5, 6, 7, 8, 7, 8, 11, 22];
let result = [];

// using forEach to modify numbers
nums.forEach((num) => {
  if (num % 2 === 0) {
    result.push(num + 2);
  } else {
    result.push(num + 5);
  }
});

// display result
result.forEach((number, index) => {
  console.log("The number is", number, "and index", index);
});
