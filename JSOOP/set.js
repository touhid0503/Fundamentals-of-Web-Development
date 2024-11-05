var s = new Set()

s.add("ki")
s.add(2)
s.add("ki")

console.log(s)

var s1 = new Set([1, 2, "ki", 1])

console.log(s1)

s1.delete(1)

console.log(s1)

s.clear()

console.log(s)

s.add(2)

console.log(s)

console.log(s.has(12))

console.log(s1.values())

console.log(s1.size)

for (const element of s1) {
    console.log(element)
}