function fizzBuzz(params) {
    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }

    let result = params.map(num => {
        if (num % 14 === 0) {
            return "FizzBuzz";
        } else if (num % 7 === 0) {
            return "Buzz";
        } else if (num % 2 === 0) {
            return "Fizz";
        } else {
            return num;
        }
    });

    return result.join(" ");
}

module.exports = fizzBuzz;