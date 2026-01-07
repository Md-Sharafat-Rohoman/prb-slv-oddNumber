function oddNumber(numbers){
    let oddnum = [];
    for(let number of numbers){
        // console.log(number);
        if(number % 2 === 1){
            oddnum.push(number);
        }
    }
    return oddnum;
}
const num = [1,2,3,4,5,6,7,8,9]
console.log(oddNumber(num));