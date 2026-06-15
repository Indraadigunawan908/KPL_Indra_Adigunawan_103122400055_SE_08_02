# Modul 10 – Library Construction
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Modul ini membangun library matematika sederhana bernama `mtk-gampang` yang dapat dipasang sebagai dependensi lokal di proyek lain. Library terdiri dari tiga fungsi yang masing-masing berada di file terpisah dan diekspor melalui `index.js` utama.

**Struktur library `mtk-gampang`:**

`lib/bulat.js` — mengubah bilangan non-bulat menjadi bilangan bulat dengan membuang bagian desimal menggunakan `Math.trunc`:

```js
export function bulat(x) {
    return Math.trunc(x);
}
```

`lib/kuadrat.js` — menghitung akar kuadrat menggunakan `Math.sqrt`:

```js
export function kuadrat(x) {
    return Math.sqrt(x);
}
```

`lib/pangkat.js` — menghitung nilai x pangkat y menggunakan `Math.pow`:

```js
export function pangkat(x, y) {
    return Math.pow(x, y);
}
```

`index.js` — mengekspor semua fungsi dari satu titik masuk:

```js
export { pangkat } from './lib/pangkat.js';
export { bulat } from './lib/bulat.js';
export { kuadrat } from './lib/kuadrat.js';
```

Library kemudian dipasang di proyek `proyek-insinyur` sebagai dependensi lokal (`"mtkgampang": "file:../mtkgampang"`) dan digunakan sebagai berikut:

```js
import { kuadrat, pangkat, bulat } from "mtk-gampang";

const narasi = `Seorang insinyur menetapkan luas panel ${bulat(kuadrat(12))} meter persegi, ` +
  `lalu menggunakan kapasitas penyimpanan sebesar ${pangkat(2, 10)} watt-jam. ` +
  `Ketika sensor mengirimkan data arus sisa yang berantakan seperti 85.95 ampere, ` +
  `ia kalibrasikan menjadi ${bulat(85.95)} agar sistem keamanan memutus aliran tepat pada angka bulat.`;

console.log(narasi);
```
