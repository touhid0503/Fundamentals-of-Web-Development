class m {
    j = 1;
    k() { //fun
        return this.j; //without static
    }
    u(id) {
        console.log(id)
    }
    // constructor(){          //normal
    //     console.log("gg")
    // }
    constructor(a, b) {     ///param. cons.
        console.log(a - b)
        this.a = a
        this.b = b
    }
    sum() {
        return this.a + this.b
    }
    static op() { //this is bined with class only
        return "hello"
    }
    static kkk = 20
}
var n = new m;

console.log(n.k());
n.u(222311092);

var q = new m(1, 2)
console.log(q.sum())

console.log(m.op())

console.log(m.kkk)