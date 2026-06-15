# Modul 12 – Performance Analysis, Unit Testing, dan Debugging
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Modul ini menerapkan unit testing menggunakan modul bawaan Node.js (`node:test` dan `node:assert`) tanpa library eksternal. Terdapat satu bug yang diperbaiki sebelum pengujian dapat berjalan: fungsi `tambahPengitung` tidak diekspor sehingga file test tidak dapat mengimpornya.

**`hitung.js` (setelah perbaikan — penambahan `export`):**

```js
// PERBAIKAN: Tambahkan keyword `export` agar fungsi ini bisa diimpor
// oleh file lain menggunakan sintaks ES Module.
// Tanpa `export`, perintah `import { tambahPengitung }` di file test
// akan gagal dengan error: "does not provide an export named 'tambahPengitung'"
export function tambahPengitung(terkini, jumlah) {
  terkini = terkini + jumlah;
  return terkini;
}
```

**`hitung.test.js` — dua test case menggunakan `assert.strictEqual`:**

```js
import { test } from 'node:test';
import assert from 'node:assert';
import { tambahPengitung } from './hitung.js';

test('5 tambah 3 sama dengan 8', () => {
  assert.strictEqual(tambahPengitung(5, 3), 8);
});

test('0 tambah 10 sama dengan 10', () => {
  assert.strictEqual(tambahPengitung(0, 10), 10);
});
```

Test dijalankan langsung dengan perintah `node --test hitung.test.js` tanpa perlu menginstal framework eksternal seperti Jest atau Mocha.
