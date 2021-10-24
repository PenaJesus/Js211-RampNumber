//For loop to loop through 0-num -> break up num if 2 or more digits -> for loop to compare and check for ramp number -> return true or false -> up the counter if true
let rampFunction = (num) => {
  let rampNumbers = [];
  let realRampCounter = 0;
  let numberArray = Array.from(Array(num+1).keys());
  for (let i = 0; i < numberArray.length; i++) {
    if (rampCheck(numberArray[i])) {
      rampNumbers.push(numberArray[i])
      realRampCounter = realRampCounter + 1
      }
  }
  console.log(realRampCounter);
  console.log(rampNumbers);
}

let rampCheck = (num) => {
  let counter = 0
  const numArray = num.toString().split("").map(Number)

  for (let i = 0; i < numArray.length-1; i++) {
    if (numArray[i] > numArray[i+1]) {
      counter = counter + 1;
      return false;
    }
    else {
      counter = counter + 1;
    }
  }
  if (counter === numArray.length-1) {
    return true;
  }
}
  
console.log(rampFunction(123))


// let rampNum = (num) => {
//   let counter = 0
//   let result;
//   let numArr = Array.from(Array(num).keys())
//   console.log(numArr)
//   let rampArr = []
//   for (let i = 0; i < numArr.length; i++) {

//     const splitNum = numArr[i].toString().split("").map(Number);
//     console.log('split num', splitNum)
    
//     if (for (let j = 0; j < splitNum.length - 1; j++) {
//       if (splitNum[j] >= splitNum[j + 1]) {
//         return false
//       } else {
//         return true
//       }

//     })
//     console.log('array of ramp num', rampArr)
//     counter = + 1
//     console.log('counter:', counter)
//     rampArr.push(numArr[i])


    //  if (i < i+1) 
    //   {
    //     result = "is a ramp num"

    //   } else {
    //     result = "is not ramp num"
    //   }

    // }
    //   return result;  
//   }
// }
console.log(rampCheck(1223))