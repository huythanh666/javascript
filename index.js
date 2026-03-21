function whatIsInAName(collection, source) {
  // 1. Lấy danh sách các "key" (thuộc tính) cần kiểm tra từ đối tượng source
  const sourceKeys = Object.keys(source);
console.log(sourceKeys)
  // 2. Lọc mảng collection
  return collection.filter(obj => {
    // 3. Kiểm tra xem MỌI key trong sourceKeys có khớp với obj hiện tại không
    return sourceKeys.every(key => {
      // Điều kiện: obj phải có thuộc tính 'key' và giá trị phải bằng với source
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// Ví dụ kiểm tra:
const result = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ], 
  { last: "Capulet" }
);

console.log(result); // [{ first: "Tybalt", last: "Capulet" }]