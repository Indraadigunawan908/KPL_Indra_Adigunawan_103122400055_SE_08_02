# Modul 08 – Runtime Configuration dan Internationalization
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

TP memformat tanggal hari ini ke format Indonesia lengkap menggunakan `Intl.DateTimeFormat` dengan locale `id-ID`, menampilkan nama hari, tanggal, nama bulan, dan tahun.

```js
const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

console.log(formatter.format(new Date()));
// Contoh output: "Senin, 15 Juni 2026"
```
