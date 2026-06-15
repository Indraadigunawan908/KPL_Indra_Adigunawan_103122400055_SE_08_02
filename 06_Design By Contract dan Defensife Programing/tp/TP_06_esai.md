Nama:Indra Adigunawan  Nim:103122400055
# Asersi atau Eksepsi? Kapan Harus Pakai yang Mana?

Ketika kita menulis kode, ada dua pertanyaan besar yang sering muncul: "Bagaimana kalau inputnya salah?" dan "Bagaimana kalau sesuatu yang tidak terduga terjadi?" Dua alat yang bisa menjawab pertanyaan ini adalah **asersi** dan **eksepsi**. Keduanya terlihat mirip — sama-sama menghentikan program ketika ada yang tidak beres — tapi sebenarnya punya tujuan dan konteks penggunaan yang berbeda.

## Asersi: Untuk Menangkap Kesalahan Programmer

Asersi adalah alat untuk **pengembang**, bukan untuk pengguna. Fungsinya adalah memastikan bahwa asumsi-asumsi yang kita pegang selama menulis kode benar-benar terpenuhi saat program berjalan. Dengan kata lain, asersi dipakai untuk menangkap **bug** yang seharusnya tidak pernah terjadi kalau kodenya ditulis dengan benar.

Contohnya seperti ini: kalau kita punya fungsi `divide(a, b)` dan kita sudah tahu bahwa fungsi ini **hanya boleh dipanggil dengan bilangan**, maka kita bisa pasang asersi untuk memastikan itu:

```js
const assert = require('assert');

function divide(a, b) {
  assert(typeof a === 'number' && typeof b === 'number', 'Nilai harus bilangan');
  assert(b !== 0, 'Tidak bisa pembagian dengan nol');
  return a / b;
}
```

Kalau asersi ini jebol, artinya ada programmer lain (atau diri kita sendiri di masa lalu) yang memanggil fungsi ini dengan cara yang salah. Asersi cocok digunakan saat **fase pengembangan** — sebagai pendeteksi dini sebelum kode sampai ke tangan pengguna.

Namun, ada hal penting yang perlu diingat: asersi biasanya **dimatikan di lingkungan produksi** untuk alasan performa. Karena itu, jangan mengandalkan asersi untuk menangani kesalahan yang mungkin terjadi di dunia nyata.

## Eksepsi: Untuk Menangani Kondisi yang Memang Bisa Terjadi

Berbeda dengan asersi, eksepsi adalah alat untuk menangani **kondisi yang bisa saja terjadi meskipun kode kita sudah benar**. Misalnya, pengguna memasukkan teks di mana seharusnya angka, atau koneksi internet tiba-tiba putus saat mengambil data. Ini bukan bug — ini adalah skenario yang memang perlu kita antisipasi.

```js
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Nilai harus bilangan");
  }
  if (b === 0) {
    throw new Error("Tidak bisa pembagian dengan nol");
  }
  return a / b;
}

try {
  const result = divide(10, 2);
  console.log("Hasilnya:", result);
} catch (error) {
  console.error("Error:", error.message);
}
```

Dengan eksepsi, kita bisa "menangkap" kesalahan menggunakan blok `try-catch` dan memberikan respons yang tepat — misalnya menampilkan pesan error yang ramah ke pengguna, atau mencoba ulang operasi yang gagal. Eksepsi sangat penting terutama dalam pemrograman asinkron, seperti ketika kita mengambil data dari API atau membaca file.

## Jadi, Harus Pilih yang Mana?

Jawabannya: **keduanya, tapi di tempat yang tepat.**

Gunakan **asersi** ketika:
- Kamu ingin memvalidasi asumsi internal yang seharusnya selalu benar
- Kesalahan yang terjadi adalah murni kesalahan programmer, bukan pengguna
- Kamu sedang dalam fase pengembangan dan ingin mendeteksi bug lebih awal

Gunakan **eksepsi** ketika:
- Input berasal dari pengguna atau sumber eksternal yang tidak bisa kita kontrol
- Kesalahan bisa terjadi di lingkungan produksi dan perlu ditangani dengan baik
- Kamu ingin memberikan pesan error yang informatif dan program bisa tetap berjalan

Untuk fungsi `divide(a, b)` seperti di atas, pendekatan terbaik adalah **eksepsi** — karena fungsi ini kemungkinan besar akan menerima input dari pengguna yang bisa saja salah memasukkan nilai. Kalau kita hanya pakai asersi, begitu kode masuk produksi dan asersi dimatikan, validasi ikut hilang dan program bisa menghasilkan `NaN` atau `Infinity` tanpa ada peringatan sama sekali.

Kesimpulannya, asersi dan eksepsi adalah dua sisi yang saling melengkapi. Asersi menjaga kita dari diri kita sendiri selama pengembangan, sementara eksepsi menjaga program kita dari hal-hal tak terduga di dunia nyata. Menggunakan keduanya secara bijak adalah salah satu ciri kode yang defensif dan matang.
