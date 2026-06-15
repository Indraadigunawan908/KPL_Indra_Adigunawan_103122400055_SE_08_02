# Modul 02 – Pemrograman JavaScript
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Fungsi `mulOfArray` mengalikan semua elemen array yang bernilai positif (lebih dari 0). Elemen nol atau negatif diabaikan agar tidak menghasilkan hasil perkalian yang tidak diinginkan.

```js
const arr1 = [2, 0, 26, 28, -2];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
           result = result * arr[i];
       }
    }
    return result;
}

const arr1Result = mulOfArray(arr1);
console.log(arr1Result); // Output: 1456
```
