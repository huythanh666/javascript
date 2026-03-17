function reverseString(string){
  let reverse = "";
  for(let i = string.length -1 ; i >= 0 ; i--){
    reverse += string[i]
  }
  return reverse
}
let result = reverseString("hello");
function reverseString(str) {
  return str.split('').reverse().join('');
}
function reverseString(str) {
  let reversedArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArray.push(str[i]);
  }
  return reversedArray.join('');
}
/*
Tiêu chí,           Code của bạn,             Array Methods (split.reverse),          Array Push (join)
Độ chính xác,       100%,                     100%,                                   100%
Độ dễ đọc,          Cao,                      Rất cao,                                Trung bình
Hiệu suất bộ nhớ,   Thấp (do tạo nhiều chuỗi tạm),Trung bình,                         Cao nhất
Tốc độ thực thi,    Khá,                      Nhanh,                                  Nhanh nhất
*/