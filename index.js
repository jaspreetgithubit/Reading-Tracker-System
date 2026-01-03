// <!-- ARRAY -->
//  <!-- array is used to store multiple data of multiple type -->
//   <!-- creation of array -->
//    let family = new Array("jaspreet", 20,"raman",45,"navpreet",25,"jaswinder",56);
//    let cousins = new Array("twinkle",27,"taran",27,"harpreet",17,"neha",32);
//    let friends = new Array("jia",25,"arsh",22,"tarushee",15);
// concatenation (combining family and cousins (concat can take one value and more than that))
// let allMember = family.concat(cousins,friends);
// console.log(allMember);

// push(add value to end) unshift(add value to in front),pop(remove value at end) shift(it will remove first value from array),
// let num = ["raju","rahul", "rohan"];
// console.log(num[1]);
// num.push("jaspreet");
// num.unshift("harpreet");
// num.pop();
// num.shift();
// console.log(num);

//1)  concat (done)
// 2) split (it will split the each words of sentence)
// 3) join (join joins all the elements that we r passed in a array)
// 4) every(every will reach every point and it will check till last untill it will get false value)
// let quote ="welcome to lovely professional university";
// let value = quote.split(" ");
// console.log(value)


// let data = ["ria","and","jaspreet","and","arun","are","friends"];
// let result = data.join(" ");
// console.log(result);


// let values = [2,4,9,16,18,20];
// let result2 = values.every( x => x % 2 == 0);
// console.log(result2)


//  object  -> it is used for storing data we can store multiple key and value we can create nested oobjects
// creating a object
// let datast = [{name1 : "jaspreet kaur",
//     class1 : "k23pr",
//     cgpa : 8
// },
// {
//     name1 : "harpreet",
//     class1 :  "k23tr",
//     cgpa : 9

// },
// {
//     name1 : "harpreet6",
//     class1 :  "k23tr",
//     cgpa : 7

// }
// ]
// // console.log(data.cgpa);
// let toppers = datast.filter(x => x>8);
// console.log(toppers);



//  SPLIT










// 15-10-2025




// // FOR EACH , filter , find , array.from() , indexof

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



// let nums = [2, 3, 4, 5, 6, 7, 8, 7, 8, 11, 22];
// let result = [];

// // using forEach to modify numbers
// nums.forEach((num) => {
//   if (num % 2 === 0) {
//     result.push(num + 2);
//   } else {
//     result.push(num + 5);
//   }
// });

// // display result
// result.forEach((number, index) => {
//   console.log("The number is", number, "and index", index);
// });




// let value = "welcome";
// let result = Array.from(value);
// console.log(result);




//  let nums = [2, 3, 4, 5, 6, 7, 8, 7, 10, 11, 22,10];
//  let result = nums.indexOf(10);

//  console.log(result);







// 17-10-2025
// MAP
let nums = [8,12,34,56,78,89];
let sum =0;
let int;
for( i=0;i<nums.length;i++){
sum = sum+nums[i];
}
console.log(sum);
