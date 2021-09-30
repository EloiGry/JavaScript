// var cat = {
//     firstname: "Garfield",
//     age: 3,
//     isCute: true
      
// }

// console.log(cat)
// console.log(cat.age)
// if(cat.isCute === true) {console.log("So cute!")}


// var cat2 = {
//     firstname: "Georges",
//     age: 13,
//     isCute: false
// }

// var cats = [cat, cat2]

// console.log(cat.age)
// console.log(cat2.isCute)

// function checkIfEven(num) {
//     if(num % 2 === 0) {
//         console.log("even")
//         } else {
//             console.log("odd")
//         }
//     }
// checkIfEven(462)


// function compare (num1, num2) {
//     if(num1 > num2) {
//         console.log("num1 is bigger")
//     } else if (num1 < num2) {
//         console.log("num2 is bigger")
//     } else {
//         console.log("both are the same")
//     }
// }

// compare (7, 7)



// function addUp(num) { 
//     var total = 0
//     for (var i = 1; i <= num; i++ ) {
//         var total = total + i
//         console.log(total)
// }
// }

// addUp(12)



function format (num) {
    var total = 0
    var hours = 0
    var min = 0
    var sec = sec + 1
    if (sec > 60) {
        min = min + 1
    }
    if (sec => 60) {
        sec = 0
    }
    if (min => 60) {
        hours = hours + 1
    }
    if (min => 60) {
        min = 0
    }

    num = `${hours} : ${min} : ${sec}`
    
}

format(350)


