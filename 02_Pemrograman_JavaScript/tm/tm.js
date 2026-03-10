function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    const result = arr.map(num => {
        if (num % 14 === 0) {
            return "FizzBuzz";
        } else if (num % 2 === 0) {
            return "Fizz";
        } else if (num % 7 === 0) {
            return "Buzz";
        } else {
            return num.toString();
        }
    });

    return result.join(' ');
}

module.exports = fizzBuzz;