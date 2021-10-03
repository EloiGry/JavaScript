// function sortLetters (str) {
//     var array = str.split("")
//     var result = array.sort()
//     var total = result.join("")
//     console.log(total)

// }

// sortLetters("konexio")




// function countEach (str) {
//     var nx = 0
//     var no = 0

//     for (var i=0; i<str.length; i++) {
//         var character = str[i]
//         if (character === "x") {
//             nx = nx + 1
//         }

//         if (character === "o") {
//             no = no + 1
//         }
        
//     }
//     if (nx === no) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// countEach("xxxxooo")

// function checkPal (str) {
//     var commun = str
//     var array = str.split("")
//     var reverse = array.reverse()
//     var resultReverse = reverse.join("")
//     if (commun === resultReverse) {
//         console.log(true)
//     } else {
//         console.log (false)
//     }

// }

// checkPal("jeruis")

// function swap (str) {
//     for (var i=0; i < str.length; i++) {

//         var character = str[i]
//         if (character === character.toUpperCase()) {
//             console.log (character.toLowerCase())
//         } else { 
//             console.log (character.toUpperCase())  
//         }

//     }

// }

// swap("BreEeh")

// function makeItSpongeBob (str) {
//     var result = ""
//     for (var i=0; i < str.length; i++) {
//         var character = str[i]
//         if (i % 2 === 0) {
//             result = result + character.toUpperCase()
//         } else {
//             result = result + character.toLowerCase()
//         }
    

//     }



// console.log(result)
// }

// makeItSpongeBob ("Javascript is easy")


// function sortLetters (str) {
//     var array = str.split("")
//     var result = array.sort()
//     var total = result.join("")
//     console.log(total)
// }
    

// sortLetters ("konexio")

// function countEach (str) {
//     var nx = 0
//     var no = 0
//     for (i=0; i<str.length; i++) {
//         var character = str[i]
//         if (character === "x") {
//             nx = nx + 1
//         } 

//         if (character === "o") {
//             no = no + 1
//         } 
//     }
//     if (no = nx) {
//         console.log(true) 
//     } else {
//         console.log(false)
//     }
    
// }

// countEach ("xox")

// function checkPal (str) {
//     var common = str.split("")
//     var array = common.reverse()
//     var join = array.join("")
//     if (str === join) {
//         console.log("Palindrome!")
//     } else {
//         console.log("false!")
//     }
// }


// checkPal ("kayak")

// function swap (str) {
    
    

//     for (var i=0; i<str.length; i++) {

//         var character = str[i]

//         if (character === character.toUpperCase()) {
//             console.log(character.toLowerCase())
//         }
        
//         if (character === character.toLowerCase()) {
//             console.log(character.toUpperCase())
//         }
//     }
    
    
// }

// swap ("HellO")



// function makeItSpongeBob (str) {
//     for (var i =0; i< str.length; i++) {
//         var character = str[i]
//         if (i % 2 === 0) {
//             console.log(character.toLowerCase())
//         } else {
//             console.log(character.toUpperCase())
//         }
//     }
// }

// makeItSpongeBob ("javascript is easy")

function makeItSpongeBob (num, num1) {
    var result = num * num1
    console.log(result)

}

makeItSpongeBob (8, 9)