function fearNotLetter(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(string[0]);
  for (let i = 0; i < string.length; i++) {
    if (alphabet[index + i] !== string[i]) {
      return alphabet[index + i];
    }
  }
  return undefined;
}
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Lấy mã Unicode của ký tự hiện tại và ký tự tiếp theo
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    // Nếu khoảng cách giữa chúng lớn hơn 1, nghĩa là có chữ bị thiếu
    if (nextCode - currentCode > 1) {
      // Trả về ký tự bị thiếu đó (mã của nó là currentCode + 1)
      return String.fromCharCode(currentCode + 1);
    }
  }
  
  return undefined;
}

console.log(fearNotLetter("stvwx")); // Trả về "u"