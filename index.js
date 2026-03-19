  function generatePassword(length){
    let result = "";
      const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    for(let i = 0; i < length;i++){
      console.log(Math.floor(Math.random() * charset.length))
const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
      result +=randomChar
    }
    return result
  }

  let password = generatePassword(7);
  console.log(password)


  const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// function generatePassword(length) {
//   let passwordArray = new Array(length); // Khởi tạo mảng với độ dài xác định
//   const charsetLength = CHARSET.length;

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charsetLength);
//     passwordArray[i] = CHARSET[randomIndex]; // Gán trực tiếp vào chỉ số mảng
//   }

//   return passwordArray.join(''); // Nối một lần duy nhất
// }
