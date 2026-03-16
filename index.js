function chunkArrayInGroups(arr,num){
    let result = [];
  for (let i = 0; i < arr.length; i += num) {
    let arrSlice = arr.slice(i, i + num); 
    result.push(arrSlice)
}
  return result
}
/*
Cách dùng while loop (Tối ưu về sự ngắn gọn)
*/
function chunkArrayInGroups(arr, num) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    // i được tăng lên ngay khi đang thực hiện slice
    result.push(arr.slice(i, i += num));
  }
  return result;
}
/*
2. Cách dùng Array.from() (Phong cách "Functional Programming")
Nếu bạn làm việc trong môi trường dự án hiện đại (như React hoặc Node.js mới nhất),
bạn có thể dùng Array.from để tạo mảng kết quả mà không cần khởi tạo let result = [] thủ công.
*/
function chunkArrayInGroups(arr, num) {
  // Tính số lượng mảng con cần có
  const length = Math.ceil(arr.length / num);
  
  return Array.from({ length }, (_, i) => 
    arr.slice(i * num, i * num + num)
  );
}
console.log(chunkArrayInGroups([1,2,3,4,5,6,7], 2))