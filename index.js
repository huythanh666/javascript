function repeatStringNumTimes(string,num){
  if(num <= 0){
    return []
  }
  let repeat = string;
  for(let i = 1 ; i < num ; i++){
    console.log(string)
    string+=repeat;
  }
  return string
}
let result = repeatStringNumTimes("*",3)
console.log(result)