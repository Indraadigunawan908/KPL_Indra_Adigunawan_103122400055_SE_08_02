const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Fungsi hash djb2: mengubah nama menjadi angka tetap di rentang 1-100
// - Setiap karakter diambil nilai ASCII-nya (charCodeAt)
// - Diakumulasi dengan rumus: hash = hash * 33 XOR charCode
// - Case-sensitive: 'H' (72) != 'h' (104), jadi "Hamid" != "hamid"
// - Deterministik: nama yang sama SELALU menghasilkan angka yang sama
function hashNama(nama) {
    let hash = 0;
    for (let i = 0; i < nama.length; i++) {
        hash = (hash << 5) - hash + nama.charCodeAt(i);
        hash = hash & hash; // Konversi ke 32-bit integer
    }
    return (Math.abs(hash) % 100) + 1;
}

app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    // Validasi input
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

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});