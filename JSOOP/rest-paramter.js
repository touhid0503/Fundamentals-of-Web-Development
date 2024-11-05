function sum(a,b,...arr){ //rest parameters
    let sum=0
    for(let i of arr){
        sum+=i
    }
    console.log(sum)
    console.log(a-b)
}
sum(1,2,3,4,5)