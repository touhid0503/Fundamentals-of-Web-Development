var f=function(){
    console.log("x")
}
f()

var f=function(...parameters){
    for(let i of parameters){
        console.log(i)
    }
}
f(1,2,3,4,5)

var f = function(...parameters) {
    return parameters;
}

console.log(f(1, 2, 3, 4, 5));