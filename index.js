let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name,info){
    for(const i of contacts){
        if(i.firstName == name){
          if(info in i) {
            return i[info]
          } else {
            return "No such property"
          }
        }       
    }
          return "No such contact"

}
/*
1. Sử dụng .find() (Phong cách hiện đại)
Thay vì dùng vòng lặp for...of và viết return thủ công, bạn có thể dùng phương thức .find() của mảng.
Nó giúp mã nguồn trở nên gọn gàng hơn nhiều:
*/
function lookUpProfile(name, info) {
  // Tìm contact có firstName khớp với name
  const contact = contacts.find(c => c.firstName === name);

  // Nếu không tìm thấy contact
  if (!contact) return "No such contact";

  // Nếu thuộc tính không tồn tại
  if (!(info in contact)) return "No such property";

  // Trả về giá trị
  return contact[info];
}
console.log("address" in contacts[1])
let result = lookUpProfile("Kristian", "lastName");
console.log(result)