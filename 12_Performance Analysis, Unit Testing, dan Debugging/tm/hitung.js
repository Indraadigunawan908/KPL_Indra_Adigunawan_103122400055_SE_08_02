// PERBAIKAN: Tambahkan keyword `export` agar fungsi ini bisa diimpor
// oleh file lain (seperti hitung.test.js) menggunakan sintaks ES Module.
// Tanpa `export`, perintah `import { tambahPengitung }` di file test
// akan gagal dengan error: "does not provide an export named 'tambahPengitung'"
export function tambahPengitung(terkini, jumlah) {
  terkini = terkini + jumlah;
  return terkini;
}
