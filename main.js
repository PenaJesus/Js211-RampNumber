//For loop to loop through 0-num -> break up num if 2 or more digits -> for loop to compare and check for ramp number -> return true or false -> up the counter if true


let rampNum = (num) =>
{
let counter = 0

let result;
for (let i = 0; i < num; i++) {

  const splitNum = num.toString().split("").map(Number);
  console.log(splitNum)
  for (let j = 0; j < splitNum.length; j++) {
    if(splitNum[j] < splitNum[j+1]){
      counter =+ 1
      console.log(counter)
      return true
    }
    return counter
  }
    
 if (i < i+1) 
  {
    result = "is a ramp num"

  } else {
    result = "is not ramp num"
  }
  
}
  return result;  
}
console.log(rampNum(123))