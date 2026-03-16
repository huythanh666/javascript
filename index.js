function findLongestWordLength(sentence) {
  // map chuyển từng từ thành chiều dài của nó, sau đó dùng spread để lấy max
  return Math.max(...sentence.split(' ').map(word => word.length));
}
function findLongestWordLength(sentence) {
  return sentence.split(' ').reduce((max, word) => {
    return word.length > max ? word.length : max;
  }, 0);
}
function findLongestWordLength(sentence){

  let longest = 0;

  let arr = sentence.split(' ');

  for(let word of arr){

    if(word.length > longest){

      longest = word.length;

    }

  }

  return longest

}
/*
Tiêu chí,for...of (Cách của bạn),.map() / .reduce()
Tốc độ thực thi,Nhanh nhất (Tối ưu),Chậm hơn (do callback)
Sử dụng bộ nhớ,Thấp (Tối ưu),Cao hơn (tạo mảng trung gian)
Khả năng đọc/bảo trì,Trung bình,Rất cao (Code sạch)
Khả năng debug,Dễ dàng,Khó hơn (do là chuỗi hàm)
*/