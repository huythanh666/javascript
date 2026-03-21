function diffArray(arr1,arr2){
  
    let diffArr1 =  arr1.filter((e) => {
        return !arr2.includes(e)
    })
    let diffArr2 = arr2.filter((e) => {
        return !arr1.includes(e)
    })
    return diffArr1.concat(diffArr2)
}
let result = diffArray(["pen", "book"], ["book", "pencil", "notebook"]); // pen pencil notebook
console.log(result)
