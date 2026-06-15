# Modul 10 – Library Construction
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Tugas praktikum membangun library `hitung-teks` yang menyediakan dua fungsi utilitas untuk menganalisis string: menghitung jumlah huruf alfabet dan jumlah kata yang mengandung minimal satu huruf.

**`index.js` library `hitung-teks`:**

```js
export function jumlahHuruf(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      count++;
    }
  }
  return count;
}

export function jumlahKata(str) {
  const kata = str.trim().split(/\s+/);
  let count = 0;
  for (const k of kata) {
    let adaHuruf = false;
    for (let i = 0; i < k.length; i++) {
      const c = k[i];
      if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        adaHuruf = true;
        break;
      }
    }
    if (adaHuruf) count++;
  }
  return count;
}
```

Library dipasang di proyek `proyek-uji-tp` sebagai dependensi lokal dan diuji dengan:

```js
import { jumlahHuruf, jumlahKata } from 'hitung-teks';

const teks = "Halo Mo! Ini adalah tes 123.";

console.log(jumlahHuruf(teks)); // 19
console.log(jumlahKata(teks));  // 4
```

Fungsi `jumlahKata` mengabaikan token yang tidak mengandung huruf sama sekali (seperti `"123."`), sehingga angka dan tanda baca tidak dihitung sebagai kata.
