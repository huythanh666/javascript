function pairElement(string){
  let result = [];
  for(const char of string){
    let dna = [];
    dna.push(char)
    if(char === "A"){
      dna.push("T");
    } else if (char === "T") {
      dna.push("A");
    } else if (char === "C"){
      dna.push("G")
    } else {
      dna.push("C")
    }
    result.push(dna)
  }
  return result
}
let result = pairElement("ATCGA");
console.log(result)
function pairElement(str) {
  // Tạo bảng tra cứu các cặp base
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  // Sử dụng .split().map() để tạo mảng 2 chiều nhanh chóng
  return str.split("").map(char => [char, pairs[char]]);
}

/*
Tiêu chí,                   Code của bạn (if...else),                   Dùng Lookup Object (map)
Độ sạch (Clean code),       Trung bình,                                 Rất cao
Khả năng mở rộng,           Khó (phải thêm nhiều else if),              Dễ (chỉ cần thêm key vào Object)
Tốc độ thực thi,            Nhanh,                                      Nhanh nhất
Độ an toàn,                 Thấp (dễ nhầm ở else),                      Cao
*/