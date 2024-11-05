function m() {  //normal fun
    console.log("hello")
}
function n(a, b) { //para fun
    return a + b
}

m()
console.log(n(1.5, 3))

function o(...a) { //rest para fun
    console.log(...a)
}

o(1, 2, 3, 4, 5, 6)

f = function () { //anon fun
    return "yes"
}
console.log(f())

lo = () => { //arrow fun
    return 1;
}

console.log(lo())

