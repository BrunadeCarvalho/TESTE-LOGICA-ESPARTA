const distinctValues = (array) =>{
    return new Set(array).size
}
const array = [2, 1, 2, 3, 1,]

console.log(distinctValues(array))