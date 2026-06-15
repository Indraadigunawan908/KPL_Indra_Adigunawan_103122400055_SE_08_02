# Modul 12 – Performance Analysis, Unit Testing, dan Debugging
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Tugas praktikum berfokus pada debugging — menemukan dan memperbaiki dua bug pada fungsi `processData` yang memproses array berisi campuran string, angka, dan boolean.

**Bug yang ditemukan dan diperbaiki:**

**Bug 1 — `data.toLowerCase()` pada nilai non-string:**
Memanggil `.toLowerCase()` langsung pada elemen array yang bertipe `number` atau `boolean` melempar `TypeError: data.toLowerCase is not a function`. Perbaikan: konversi ke string terlebih dahulu dengan `String(data)`.

**Bug 2 — `parseInt()` memotong desimal:**
`parseInt("78.9")` menghasilkan `78`, sehingga perbandingan `str === String(num)` → `"78.9" === "78"` bernilai `false` dan bilangan desimal salah diklasifikasikan sebagai teks. Perbaikan: gunakan `parseFloat()`.

**`index.js` (setelah kedua bug diperbaiki):**

```js
function main() {
  const data = ["123", 456, "hello", 78.9, true];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  // Bug 1 fix: String(data) sebelum .toLowerCase()
  const str = String(data).toLowerCase();

  // Bug 2 fix: parseFloat agar desimal terbaca utuh
  const num = parseFloat(str);

  if (!isNaN(num) && str === String(num)) {
    return `Number: ${num * 2}`;
  }
  return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();
```

**Output yang dihasilkan:**
```
Item 1: 123 -> Number: 246
Item 2: 456 -> Number: 912
Item 3: hello -> Teks: hello (panjangnya: 5)
Item 4: 78.9 -> Number: 157.8
Item 5: true -> Teks: true (panjangnya: 4)
```
