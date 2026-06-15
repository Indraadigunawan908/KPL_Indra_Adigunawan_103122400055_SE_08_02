# Modul 09 – API Design dan Konstruksi Menggunakan Swagger
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

API dengan Express.js yang menerima POST berisi nama dan tebakan angka. Nama di-hash menggunakan algoritma djb2 untuk menghasilkan angka tetap antara 1–100. Server merespons apakah tebakan tepat, terlalu tinggi, atau terlalu rendah.

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

function hashNama(nama) {
    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash = (hash << 5) - hash + nama.charCodeAt(i);
        hash = hash & hash;
    }
    return (Math.abs(hash) % 100) + 1;
}

app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (!nama || tebakan === undefined) {
        return res.status(400).json({ error: "Field 'nama' dan 'tebakan' wajib diisi." });
    }
    if (typeof nama !== 'string' || typeof tebakan !== 'number') {
        return res.status(400).json({ error: "'nama' harus string dan 'tebakan' harus angka." });
    }

    const angkaRahasia = hashNama(nama);
    let jawaban;

    if (tebakan === angkaRahasia) {
        jawaban = `Benar sekali! Tebakannya adalah ${tebakan}.`;
    } else if (tebakan > angkaRahasia) {
        jawaban = "Tebakanmu terlalu tinggi!";
    } else {
        jawaban = "Tebakanmu terlalu rendah!";
    }

    res.json({ jawaban });
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
```
