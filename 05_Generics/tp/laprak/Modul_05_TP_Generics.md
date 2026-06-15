# Modul 05 – Generics
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Fungsi `hitung` menerima string dan mode operasi (`"semua"` atau `"huruf"`). Jika `"semua"`, semua karakter dihitung; jika `"huruf"`, spasi diabaikan.

```js
function hitung(str, mode) {
    let count = 0;

    for (let c of str) {
        if (mode === "semua") {
            count++;
        } else if (mode === "huruf") {
            if (c !== " ") count++;
        }
    }

    return count;
}

const str = "Bar bar bar";
console.log(hitung(str, "semua")); // 11
console.log(hitung(str, "huruf")); // 9
```
