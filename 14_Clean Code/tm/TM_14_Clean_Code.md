# TM 14 – Kode Mana yang Mau Diperbaiki Jam 1 Malam?

## Jawabannya: Kode Kedua

```javascript
function processUser(user) {
  if (!isValidCandidate(user)) return null;
  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}
```

---

## Alasannya

Jam 1 malam, otak sudah lelah. Yang paling dibutuhkan bukan kode yang "pintar", melainkan kode yang bisa langsung dibaca tanpa harus berpikir keras.

**Kode pertama** memaksa otak menelusuri tiga lapisan `if` bersarang hanya untuk memahami satu pertanyaan sederhana: *"kapan user ini valid?"* Setiap lapisan adalah keputusan terpisah yang harus diingat sambil membaca lapisan berikutnya. Di kondisi ngantuk, sangat mudah untuk kehilangan jejak di lapisan mana kita sedang berada — dan itu berarti lebih banyak waktu terbuang sebelum bisa mulai memperbaiki apapun.

**Kode kedua** melakukan hal yang sama, tapi cara bacanya jauh berbeda. `processUser` cukup dibaca dua baris: kalau tidak valid, keluar; kalau valid, kerjakan. Selesai. Kondisi validasi itu sendiri dikumpulkan di `isValidCandidate` dengan nama yang sudah menjelaskan tujuannya. Tidak perlu mental overhead ekstra.

---

## Perbedaan Intinya

Kode pertama menulis **"bagaimana"** cara mengeceknya (tiga `if` bertingkat). Kode kedua menulis **"apa"** yang sedang dicek (`isValidCandidate`). Di saat normal, keduanya mungkin terasa setara. Tapi saat pikiran tidak dalam kondisi terbaik, kode yang berbicara dalam bahasa manusia — bukan dalam logika kondisional berlapis — jauh lebih mudah dipercaya dan diubah tanpa takut salah.

Ini juga yang sering disebut sebagai **"code that reads like prose"** — salah satu tujuan utama clean code menurut Uncle Bob.
