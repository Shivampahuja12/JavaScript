let a = 12
const b = 30
var c = 1230    // var doesn't show any block properties 

if (true) {
    let a = 1
    const b = 2
    var c = 3
}

// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const name = "amannat";
    function two(){
        const director = "bholenath, radha rani"
        console.log(`Directed by ${director}`)
        console.log(`Directing to ${name}`)
    }
    two()
}
one()


console.log(addOne(5))
function addOne(num){
    return num+1
}


const addtwo = function (num){
    return num+2
}
console.log(addtwo(4))  // cant access this before declarationjav