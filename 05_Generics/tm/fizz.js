/**
 * @param {number} value 
 * @returns {number | string}
 * @throws {TypeError}
 */
function zzzzOrNum(value) {
    if (typeof value !== "number" || !Number.isInteger(value)) {
        throw new TypeError("Input harus bilangan bulat");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    }
    if (value % 3 === 0) {
        return "Fizz";
    }
    if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * 
 * @param {number[]} sequence 
 * @returns {(number | string)[]}
 * @throws {TypeError} 
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new TypeError("Input harus array");
    }

    sequence.forEach((e) => {
        if (typeof e !== "number" || !Number.isInteger(e)) {
            throw new TypeError("Semua elemen harus bilangan bulat");
        }
    });

    return sequence.map((e) => zzzzOrNum(e));
}

module.exports = {
    fizzBuzz,
    zzzzOrNum,
};