function findElement(arr,func){
  for(const x of arr){
    if(func(x)){
      return x
    }
  }
      return undefined

}
let result = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
console.log(result)

/*
2. Các cách tiếp cận khác (Modern JS)
Trong thực tế, JavaScript có sẵn một phương thức là .find() thực hiện chính xác nhiệm vụ này.
Tuy nhiên, việc tự viết hàm như bạn đang làm giúp bạn hiểu sâu hơn về cách các hàm bậc cao (Higher-order functions) hoạt động.
*/
function findElement(arr, func) {
  return arr.find(func); 
  // .find() sẽ tự động trả về phần tử đầu tiên thỏa mãn hoặc undefined
}
/*
3. Một chút "tinh tế" để code sạch hơn
Code của bạn đã rất ổn, nhưng mình có một lưu ý nhỏ về trình bày: trong JavaScript, nếu kết thúc hàm mà không có lệnh return,
 mặc định nó sẽ trả về undefined. Vì vậy, dòng return undefined cuối cùng có thể lược bỏ nếu bạn muốn code ngắn hơn 
(nhưng viết rõ ra như bạn cũng rất tốt vì nó giúp người khác đọc code hiểu ngay ý đồ của bạn).
*/
function findElement(arr, func) {
  for (const x of arr) {
    if (func(x)) return x;
  }
  // Mặc định trả về undefined nếu vòng lặp kết thúc mà không có gì được return
}

/*
Phương pháp,            Tốc độ,                   Bộ nhớ,                           Ghi chú
for...of (Của bạn),     Rất nhanh,                Cực thấp,                         Tối ưu nhất cho mọi trường hợp.
arr.find(),             Nhanh,                    Thấp,                             "Code ngắn gọn, chuyên nghiệp."
arr.filter()[0]         ,Chậm,                    Cao,                              Không nên dùng vì tạo mảng phụ không cần thiết.
*/