
(function(){
    const arr=[1,2,3,4,5,6,7,8,9,10]
    const result=[]
    arr.forEach(el=>{
        if(el%2!==0)
            result.push(el)
    })
    console.log('Array of odd :', result)
})()