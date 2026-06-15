# Modul 02 – Pemrograman JavaScript
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Fungsi `fizzBuzz` menerima array dan memetakan setiap elemen menggunakan aturan modulo yang dimodifikasi: habis dibagi 14 → `"FizzBuzz"`, habis dibagi 7 → `"Buzz"`, habis dibagi 2 → `"Fizz"`, dan sisanya dikembalikan apa adanya. Input yang bukan array langsung mengembalikan pesan kesalahan.

```js
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
```
