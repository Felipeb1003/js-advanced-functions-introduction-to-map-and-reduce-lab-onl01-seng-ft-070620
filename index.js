// Your code here
function mapToNegativize(array) {
    let result = []
    for (let i = 0; i < array.length; i++ ){
        result.push(-1 * array[i])
    }
    return result
}

function mapToNoChange(array) {
    let result = []
    for (let i=0; i < array.length; i++) {
        result.push(array[i])
    }
    return result
}

function mapToDouble(array) {
   let result = []
   for (let i=0; i < array.length; i++){
   result.push(2*array[i])
   }
   return result
}

function mapToSquare(array) { 
    let result = []
    for (let i=0; i < array.length; i++){
        result.push(array[i] * array[i])
    }
    return result
}

function reduceToTotal(array, startingPoint=0){
    let result = startingPoint
    for (let i=0; i < array.length; i++){
        result = result + array[i]
    }
    return result
}

function reduceToAllTrue(array){
    for (let i=0; i < array.length; i++){
        if (array[i] === false) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for (let i=0; i < array.length; i++){
        if (array[i] === true) return true
    }
    return false
}