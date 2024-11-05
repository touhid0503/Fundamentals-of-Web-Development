class a {
    fun() {
        console.log("a")
    }
    fun1() {
        console.log("fun1-a")
    }
}
class b extends a {
    fun1() {
        console.log("fun1-b") //override
    }
    sup() {
        super.fun1() //super keyword
    }
}

var ob = new b();
ob.fun()
ob.fun1()
ob.sup()