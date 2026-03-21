function destroyer(arr,...rest){
    return arr.filter((e) => {
        return !rest.some(number => number === e)
    })
  
}

let result = destroyer([1, 2, 3, 5, 1, 2, 3], 2,3)


function destroyer(arr, ...rest) {
  return arr.filter(e => !rest.includes(e));
}

function destroyer(arr, ...rest) {
  const valuesToRemove = new Set(rest);
  return arr.filter(e => !valuesToRemove.has(e));
}
console.log(result)


/*

Đặc điểm,                      filter + some (Của bạn),                 filter + includes,                                      filter + Set
Độ phức tạp,                   O(n×m),                                   O(n×m),                                                O(n+m)
Tốc độ (Time),                 Chậm nhất (do phải chạy callback function mỗi lần),Trung bình (nhanh hơn some một chút),         Nhanh nhất (tìm kiếm trong Set là O(1))
Bộ nhớ (Space),                Thấp (không tạo cấu trúc dữ liệu mới),   Thấp (không tạo cấu trúc dữ liệu mới),                  Cao hơn (tốn thêm bộ nhớ để tạo Set)
*/