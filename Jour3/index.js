var fruits = ["mango", "lemon", "blueberry"]
console.log (fruits)

console.table(fruits)

var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients[2])

var objects = ["pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)

var numbers = [4, 10, 8, 12, 6]
numbers.reverse()
console.log(numbers)
numbers.sort((a, b) => a - b)
console.log(numbers)



var total = 0
var limit = 10


for (var i=0; i<=limit; i++) {
    total = total + i
}
console.log(total)


// var sentence = "Hello Konexio!"


// for ( var i="Hello Konexio !"; 


// Bonus

for (var i=0; i<=100; i++) {
    if(i % 3 === 0 && i!==0) {
        console.log("fozz")
    }
    else if(i % 5 === 0 && i!==0) {
        console.log("laz")
    }
    else if(i % 5 === 0 && i % 3 && i!==0) {
        console.log("fozzlaz")
    }
    else if(i % 7 === 0 && i!==0) {
        console.log(undefined)
    }
    else {
        console.log(i)
    }
}













