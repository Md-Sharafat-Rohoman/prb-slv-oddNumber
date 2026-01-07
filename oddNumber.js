function oddNumber(numbers) {
    let oddnum = [];
    let sum = 0;
    for (let number of numbers) {
        // console.log(number);
        
        if (number % 2 === 1) {
            oddnum.push(number);
            sum = sum + number;
        }
    }
    return sum;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(oddNumber(num));