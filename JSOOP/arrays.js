var arr1 = [1, 2, 5, 6, 1] //one d
var arr2 = new Array("a", "K", 20)

for (const element of arr1) {
    console.log(element)
}
for (const element of arr2) {
    console.log(element)
}

var arr3 = [arr1, arr2] //multi

console.log(arr3[1][2])

var coun = ["ban", 2, "ind", 1]

var [a, , b] = coun //de structuring

console.log(b)

