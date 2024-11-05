var hi = {
    1: "hh",
    "kk": 23,
    "lk": "kk"
}

for (let i in hi) {
    console.log(i, "=>", hi[i], "\n");
}

var hi = {
    j: {
        1: "hh",
        "kk": 23,
        "lk": "kk"
    },
    k: {
        1: "hh",
        "kk": 23,
        "lk": "kk"
    }
}

for (let i in hi) {
    console.log(i, "\n");
    for (let j in hi[i]) {
        console.log(j, "=>", hi[i][j], "\n");
    }
}