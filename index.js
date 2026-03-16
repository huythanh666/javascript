function mutation(arr){
  let count = 0;
  for(const char of arr[1]){
    if(arr[0].toLowerCase().includes(char.toLowerCase())){
        count++;
    }
  }
  return count == arr[1].length
}
function mutation(arr) {
  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();

  // Tạo một bản sao để có thể loại bỏ ký tự sau khi đã kiểm tra
  let targetCopy = target;

  for (let char of test) {
    if (targetCopy.includes(char)) {
      // Nếu tìm thấy, loại bỏ ký tự đó ra khỏi targetCopy
      // để không bị đếm trùng lặp lại lần sau
      targetCopy = targetCopy.replace(char, "");
    } else {
      // Nếu không tìm thấy, nghĩa là thiếu ký tự đó
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hh"])); // Trả về: false (đúng)
console.log(mutation(["hello", "hel"])); // Trả về: true (đúng)

function mutation(arr) {
  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  
  const charCount = {};
  
  // Đếm số lượng ký tự trong chuỗi gốc
  for (let char of target) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Kiểm tra chuỗi cần test
  for (let char of test) {
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}