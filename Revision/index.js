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

// countEach("xxxooo")

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