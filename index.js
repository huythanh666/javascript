function titleCase(string){
  let result = "";
   for(let i = 0 ; i < string.length ; i++){
    if(i === 0 || string[i - 1] === " "){
      result += string[i].toUpperCase();
    }else {
      result += string[i].toLowerCase();
    }
   }
  return result
}

function titleCase(str) {
  return str
    .toLowerCase()                          // 1. Chuyển toàn bộ về chữ thường
    .split(' ')                             // 2. Tách chuỗi thành mảng các từ
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1) // 3. Viết hoa chữ cái đầu mỗi từ
    )
    .join(' ');                             // 4. Ghép lại thành chuỗi
}

console.log(titleCase("I like to code"));      // "I Like To Code"
console.log(titleCase("javaScript is fun"));   // "Javascript Is Fun"

let result = titleCase("I like to code");
console.log(result)