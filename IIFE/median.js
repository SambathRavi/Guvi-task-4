console.log('Median of two sorted array',(function(numsA,numsB){
   const arr=numsA.concat(numsB).sort((a,b)=>a-b)
   if(arr.length%2===0){
    return(arr[arr.length/2-1]+arr[arr.length/2])/2
   }
   return arr[Math.floor(arr.length/2)]
})([2,4],[4,6]))