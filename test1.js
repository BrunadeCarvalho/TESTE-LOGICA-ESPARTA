const elementsThatHaveNoPair = (array) =>{
    
    let result = 0
    
    array.map((item)=>{
     const count =  array.filter((element)=>{
            return element == item
        })
        if(count.length % 2 != 0){
            result = item
        }    
    })
    return result
}
const array = [9, 3, 9, 3, 9, 7, 9]

console.log(elementsThatHaveNoPair(array))