function frankenSplice(arr1,arr2,index){
  for(const item of arr1){
    arr2.splice(index,0,item)
    index++;
  }
  return arr2;
}
let result = frankenSplice([1, 2], ["a", "b"], 1); // ["a", 1, 2, "b"]

/*
Cách 1: Sử dụng Spread Operator (Khuyên dùng)
Đây là cách hiện đại, hiệu suất rất tốt vì JavaScript xử lý việc ghép mảng cực kỳ nhanh trong một lần thực thi.
*/
function frankenSplice(arr1, arr2, n) {
  // Tạo mảng mới bằng cách ghép các phần cắt của arr2 với toàn bộ arr1
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
/*
Cách 2: Sử dụng splice một lần với Spread
Nếu bạn vẫn muốn dùng splice, bạn có thể chèn toàn bộ arr1 vào temp chỉ với một câu lệnh:
*/
function frankenSplice(arr1, arr2, n) {
  let temp = [...arr2]; // Hoặc arr2.slice()
  temp.splice(n, 0, ...arr1); // Chèn toàn bộ arr1 vào vị trí n
  return temp;
}

/*
Tiêu chí,               Code của bạn,                         Dùng Spread [...]
Độ phức tạp thời gian,  O(n×m),                               O(n+m) (Tối ưu hơn)
Độ sạch của code,       Khá,                                  Rất cao
Thao tác mảng,          Dịch chuyển nhiều lần,                Ghép một lần duy nhất
*/