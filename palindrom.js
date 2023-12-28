function isPalindrom(str){
    return str.toLowerCase()===str.toLowerCase().split('').reverse().join('')
}

(function (){
    const arr=['abc', 'car', 'ada', 'racecar', 'cool']
    let result =[]
    arr.forEach(el=>{
        if(isPalindrom(el)){
            result.push(el)
        }
    })
    console.log('Palindrom of array :',result)
})()