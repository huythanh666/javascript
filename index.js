function  largestOfAll(arr){
  let maxArr = [];
  for(let i = 0; i < arr.length;  i++){
    maxArr.push(Math.max(...arr[i]))
  }
  return maxArr
}
let result = largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

/*
Cách 1: Tối ưu cho hiệu suất "Khủng" (Dùng cho dữ liệu cực lớn)
Nếu bạn làm việc với các mảng con khổng lồ, sử dụng một vòng lặp lồng nhau truyền thống sẽ an toàn và nhanh hơn vì nó không bị giới hạn bởi kích thước ngăn xếp.
*/
function largestOfAll(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0]; // Giả định phần tử đầu tiên là lớn nhất
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results.push(largestNumber);
  }
  return results;
}
/*
Cách 2: Tối ưu về phong cách (Functional Programming)
Nếu bạn muốn code trông chuyên nghiệp và "ngầu" hơn mà vẫn giữ được hiệu suất tương đương cách bạn đang dùng, hãy dùng .map():
*/
function largestOfAll(arr) {
  return arr.map(subArr => Math.max(...subArr));
}

/*
Tiêu chí,                       Code của bạn,                 Vòng lặp lồng (Nested Loop),                      Dùng .map()
Độ sạch (Cleanliness),          Rất cao,                      Thấp,                                             Cao nhất
Tốc độ (Speed),                 Nhanh,                        Nhanh  nhất,                                      Nhanh
An toàn (Safety),               Rủi ro với mảng cực lớn,      An toàn tuyệt đối,                                Rủi ro với mảng cực lớn
Độ phức tạp,                    O(n×m),                       O(n×m),                                           O(n×m)
*/