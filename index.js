function sumAll(arr){
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr)
  let result = 0;
  for(let i = newArr[0]; i <= newArr[1] ; i++){
    result += i;
  }
  return result
}
let result = sumAll([5, 10]);
console.log(result)