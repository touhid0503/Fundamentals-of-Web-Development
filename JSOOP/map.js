var m = new Map()
m.set(1, "Touhid")
m.set("key2", 23)
m.set("jk", "kl")
m.set(14, 5102)
console.log(m.keys())
console.log(m.values())


for (const [key, value] of m) {
    console.log(key, " => ", value)
}

for (const element of m.keys()) {
    console.log(element)
}

m.delete(14)
console.log(m.values())

// console.log(m.clear())
console.log(m.get("jk"))

console.log(m.has("jk"))