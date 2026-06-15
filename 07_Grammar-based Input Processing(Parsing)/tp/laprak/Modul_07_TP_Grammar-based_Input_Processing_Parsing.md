# Modul 07 – Grammar-based Input Processing (Parsing)
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Fungsi `toNumberArray` mengubah input berupa string CSV atau array of string menjadi array angka. Elemen yang tidak valid seperti `"abc23"` dibuang menggunakan `filter`.

```js
function toNumberArray(number) {
  const parts = Array.isArray(number)
    ? number
    : number.trim().split(",");

  return parts
    .map(item => item.trim())
    .map(item => Number(item))
    .filter(item => !isNaN(item));
}

console.log(toNumberArray("1, 2"));                    // [1, 2]
console.log(toNumberArray(["1", "2"]));                // [1, 2]
console.log(toNumberArray(" 11,55,33   "));            // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"]));   // [0.2, -11]
```
