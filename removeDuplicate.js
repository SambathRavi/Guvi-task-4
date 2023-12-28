

(function(){
    let arr = ['A', 'B', 'A', 'C', 'B'];

let uniqueArr = arr.filter((val, index) => {
    return arr.indexOf(val) === index;
});

console.log('Remove Duplicate :',uniqueArr);
})()