(function(){
    const str = "hello i'am sambath ravi";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log('Title Capital :',newStr);
})()