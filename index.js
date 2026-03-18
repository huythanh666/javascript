function uniteUnique(...arr){
  let newArr = [];
  for(let i = 0; i < arr.length-1 ; i++){
    newArr = newArr.concat(arr[i].concat(arr[i+1]))
  }
  const uniqueNumbers = [...new Set(newArr)];
  return uniqueNumbers
}
let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result)

/*
2. Cách tiếp cận tối ưu nhất
Thay vì nối mảng rồi mới lọc, chúng ta nên tận dụng tính chất của Set ngay từ đầu. Set có khả năng tự loại bỏ trùng lặp khi bạn thêm phần tử vào.

Cách 1: Sử dụng Spread Operator (Cực kỳ gọn và nhanh)
Đây là cách tối ưu nhất cho JavaScript hiện đại:
*/
function uniteUnique(...arrays) {
  // .flat() sẽ trải phẳng mảng 2 chiều thành 1 chiều
  // Set sẽ tự lọc các phần tử trùng lặp theo thứ tự xuất hiện
  return [...new Set(arrays.flat())];
}

/*
Cách 2: Sử dụng reduce (Nếu môi trường không hỗ trợ .flat())
Cách này kiểm soát bộ nhớ tốt hơn vì nó chỉ duyệt qua các mảng một lần:
*/
function uniteUnique(...arrays) {
  return arrays.reduce((acc, curr) => {
    return [...new Set([...acc, ...curr])];
  }, []);
}

/*
Tiêu chí                              ,Code của bạn,                  Dùng arrays.flat(),                         Dùng Set + Vòng lặp
Độ phức tạp thời gian                  ,O(n2) (do nối lặp lại),       O(n),                                       O(n)
Bộ nhớ,                               Cao (tạo nhiều mảng tạm),       Trung bình,                                 Thấp nhất
Độ sạch(Clean Code),                   Trung bình,                    Rất cao,                                    Cao
*/