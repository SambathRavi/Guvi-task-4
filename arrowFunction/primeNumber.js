function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

const getPrime=()=>{
    let prime=[]
    for(let i=1;i<=50;i++){
        if(isPrime(i))
            prime.push(i)
    }
    console.log('Prime Number :',prime)
}

getPrime()