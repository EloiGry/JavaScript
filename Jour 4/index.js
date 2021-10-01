// var cat = {
//     firstname: "Garfield",
//     age: 3,
//     isCute: true
      
// }

// console.log(cat)
// console.log(cat.age)
// if(cat.isCute) {console.log("So cute!")}


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
// }
//          console.log(total)
// }

// addUp(12)



// function format (num) {
//     var hours = 0
//     var min = 0
//     var sec = 0
    
//     for (var i=0; i<num; i++) {
//         if (sec === 59) {
//             min = min + 1
//             sec = -1
            
//         }   

        
//         if (min === 60) {
//             hours = hours + 1
//             min = 0
//         }

//         sec = sec + 1
        
//  }
//  console.log (`${hours} : ${min} : ${sec}`)
    
// }

// format(3600)

// function generatePassword (num) {
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var min = 0
//     var max = characters.length -1
//     var total = ""

//     if(num < 6 || num > 15) {
//         console.log("error")
//     } else {console.log("")}

//     for (var i=0; i<num; i++) {
//         var random = Math.floor(Math.random() * (max - min + 1) + min)
//         total = total + characters[random]
        
//     }
//     console.log(total)
// }


// generatePassword(5)

