const getSumOfArray=()=>{
    const arr=[1,2,3,4,5,6,7,8,9,10]
    let sum=0
    arr.forEach(el=>{
       sum+=el
    })
    console.log('Sum of Array :', sum)
}

getSumOfArray()