function convertHTML(string){
  let result = "";
  for(const char of string){
    if(char === "&"){
      result += "&amp;"
    } else if (char === "<"){
      result += "&lt;"
    } else if (char === ">"){
      result += "&gt;"
    } else if (char === `"`){
      result += "&quot;"
    } else if (char === "'"){
      result += "&apos;"
    } else {
      result += char;
    }
  }
    return result

}
let result = convertHTML("Dolce & Gabbana");
console.log(result)

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Sử dụng Regex để tìm tất cả các ký tự đặc biệt
  // / [&<>"'] /g có nghĩa là tìm bất kỳ ký tự nào trong ngoặc trên toàn bộ chuỗi
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}



function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
    .split("")
    .map(char => htmlEntities[char] || char) // Nếu có trong bảng thì đổi, không thì giữ nguyên
    .join("");
}


/*
Tiêu chí,               Code của bạn (if...else),                     Dùng Regex .replace(),                          Dùng .map()
Độ sạch code,           Trung bình,                                   Rất cao,                                        Cao
Tốc độ thực thi,        Khá,                                          Nhanh nhất,                                     Nhanh
Bộ nhớ,                 Trung bình,                                   Thấp,                                           Cao hơn (do tạo mảng trung gian)
*/