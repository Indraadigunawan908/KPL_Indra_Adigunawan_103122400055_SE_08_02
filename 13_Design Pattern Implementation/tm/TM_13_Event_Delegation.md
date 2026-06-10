# TM 13 – Event Delegation dalam Design Pattern JavaScript

## Apa Itu Event Delegation?

Bayangkan kamu punya daftar belanja yang panjang — sepuluh item, dua puluh item, atau bahkan lebih. Setiap item punya tombol "hapus". Cara paling naif untuk menangani klik tombol itu adalah memasang *event listener* satu per satu ke setiap tombol. Tapi ada cara yang jauh lebih pintar: pasang **satu** *event listener* di elemen induknya (si daftar), lalu biarkan ia yang mengurus semua klik dari anak-anaknya. Inilah inti dari **event delegation**.

---

## Mekanisme di Baliknya: Event Bubbling

Event delegation tidak bisa dipahami tanpa mengerti **event bubbling**. Di browser, ketika sebuah elemen diklik, event itu tidak berhenti di sana — ia "menggelembung" (bubble) ke atas, melewati setiap elemen induk hingga sampai ke `document`. Jadi kalau kamu klik sebuah `<button>` di dalam `<li>` di dalam `<ul>`, event itu akan berurutan melewati `<button>` → `<li>` → `<ul>` → `<body>` → `<html>` → `document`.

Event delegation mengeksploitasi perilaku ini. Kita duduk di elemen induk dan "menunggu" event yang naik dari bawah.

---

## Contoh Konkret

```javascript
// Cara lama: listener dipasang ke setiap tombol (tidak efisien)
document.querySelectorAll(".tombol-hapus").forEach(tombol => {
  tombol.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });
});

// Cara event delegation: satu listener di induknya
const daftarBelanja = document.getElementById("daftar-belanja");

daftarBelanja.addEventListener("click", (e) => {
  // Periksa apakah yang diklik adalah tombol hapus
  if (e.target.classList.contains("tombol-hapus")) {
    e.target.closest("li").remove();
  }
});
```

Kuncinya ada di `e.target` — properti ini memberi tahu kita **elemen mana sebenarnya yang diklik**, bukan elemen mana yang memasang listener. Dengan itu, kita bisa "menyaring" event yang relevan.

---

## Hubungannya dengan Design Pattern

Event delegation adalah implementasi praktis dari **Observer pattern** di level DOM. Dalam Observer pattern, ada *subject* yang menyimpan daftar *observer* dan memberi tahu mereka ketika sesuatu terjadi. Di sini, elemen induk berperan sebagai observer tunggal yang mengawasi seluruh anak-anaknya sekaligus.

Lebih dari itu, event delegation juga sejalan dengan prinsip **single responsibility** dan **separation of concerns** — logika penanganan event dikumpulkan di satu tempat, bukan tersebar ke mana-mana.

---

## Kenapa Ini Penting?

**1. Performa**
Memasang ribuan event listener memakan memori. Satu listener di induk jauh lebih ringan.

**2. Dinamis secara alami**
Ini keunggulan terbesar. Kalau kamu menambahkan elemen baru ke DOM (misalnya dari API atau input pengguna), listener yang dipasang dengan cara lama tidak akan mengenali elemen baru itu. Event delegation tidak punya masalah ini — karena listener ada di induk, semua elemen yang ditambahkan belakangan otomatis ter-cover.

```javascript
// Elemen ini ditambahkan setelah halaman dimuat
const itemBaru = document.createElement("li");
itemBaru.innerHTML = `Susu <button class="tombol-hapus">×</button>`;
daftarBelanja.appendChild(itemBaru);

// Tanpa event delegation: tombol hapus di itemBaru tidak akan berfungsi
// Dengan event delegation: langsung berfungsi, tanpa kode tambahan
```

**3. Kode lebih bersih**
Daripada memanggil `addEventListener` puluhan kali di berbagai tempat, cukup satu tempat yang menjadi "pusat komando" untuk event serupa.

---

## Kapan Tidak Menggunakannya?

Event delegation bukan solusi untuk segalanya. Ada beberapa event yang **tidak bubble**, seperti `focus`, `blur`, dan `scroll` — sehingga teknik ini tidak akan bekerja untuk event-event tersebut (kecuali menggunakan versi yang bubble-nya, yaitu `focusin` dan `focusout`).

Selain itu, kalau struktur DOM-nya sangat dalam dan kompleks, memeriksa `e.target` bisa menjadi lebih rumit karena perlu menangani kasus di mana yang diklik bukan elemennya langsung, melainkan elemen di dalamnya (misalnya ikon di dalam tombol). Untuk itu, `e.target.closest("selector")` adalah solusi yang lebih andal daripada memeriksa `e.target` secara langsung.

---

## Kesimpulan

Event delegation adalah teknik yang elegan: alih-alih banyak observer untuk banyak elemen, cukup satu observer di induk yang cerdas membaca siapa yang berbicara. Ia memanfaatkan mekanisme bawaan browser (event bubbling), membuat kode lebih efisien, lebih mudah dipelihara, dan siap menghadapi konten yang dinamis.
