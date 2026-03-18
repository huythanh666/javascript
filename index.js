function bouncer(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(!!arr[i]){
      result.push(arr[i])
    }
  }
  return result
}
function bouncer(arr) {
  return arr.filter(Boolean);
}

/*
Tiêu chí,                                             Code của bạn (Vòng lặp for),                  Dùng .filter(Boolean)
Tốc độ thực thi,                                      Nhanh nhất (vòng lặp cơ bản luôn nhanh nhất), Nhanh (có thêm chi phí gọi hàm callback)
Bộ nhớ,                                               Thấp,                                         Thấp
Độ sạch (Clean Code),                                 Trung bình,                                   Rất cao
Khả năng đọc,                                         Dễ hiểu,                                      Rất dễ hiểu
*/
console.log(bouncer([7, "ate", "", false, 9]))