// var min = 11
// var max = 47
// var result = 0

// for (var i = min; i < max; i++) {
//     if(i % 2 === 0) {
//     }   
//     result = result + i

// }

// console.log (result)

// var min = 109
// var max = 588
// var result = 0

// for (var i = min; i < max; i=i+2) {
// result = result + i
// }

// console.log(result)

// var numbers = [1, 2, 3, 4, 5]
// var squares = []
// var roots = []




// for (var i= 0; i < numbers.length; i++) {
//     squares[i] = numbers[i] * numbers[i]
// }

// console.table(squares)

// for (var i= 0; i < squares.length; i++) {
//     roots[i] = squares[i] / numbers[i]

// }

// console.table(roots)


// var trois = 3
// result = 0


// for (var i=0; i<=10; i++) {
    
//     result = trois * i
//     var total = `3 x ${[i]} = ${result}`   
//     console.log(total)
// }




// for (var i=0; i<=10; i++) {
//     for (var j=0; j<=10; j++) {
//         var result = i * j   
//         var total = `${i} x ${j} = ${result}` 
//         console.log(total)
        
//     } 
//     console.log('') 
// }



// var result = 1

// for(i=1; i<=7; i++) {
//     result = result * i
// }

// console.log(result)

// var result = 1

// for(var i=1; i<=8; i++) {
//     for(var j=1; j<=8; j++) {
//         var result = result * j
//         {console.log (result)}
//     }
//     }



// var total = 0

// for (i=5; i<=10; i++) {
//     var result = i * i
//     var total = total + result    
// }
// console.log (total)

// var j = 0

// for (i=100; i<=1000; i++) {
//     if (i % 7 === 0) {
//         j++
        
//     }
// }

// console.log(j)

// var min = 1;
// var max = 6;
// var total = 0


// for(i=0; i<20; i++) {
//     var random = Math.floor(Math.random() * (max - min + 1) + min);
//     if(random >= 5) {
//         console.log(random)
//       total = total + random
//     }

// }

// console.log(total)


// Boites Validés 

// Amstrong



for (i=0; i<10; i++) {
    for (j=0; j<10; j++ ) {
    for (k=0; k<10; k++ ) { 
        var result = i * 100 + j*10 + k
        var total = i**3 + j**3 + k**3
     if (total === result) {console.log(total)}
    }
}   
}
