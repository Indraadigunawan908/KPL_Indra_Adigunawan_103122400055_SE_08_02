# Modul 09 – API Design dan Konstruksi Menggunakan Swagger
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

REST API menu makanan dengan tiga endpoint yang dilengkapi dokumentasi Swagger menggunakan `swagger-jsdoc` dan `swagger-ui-express`. Dokumentasi dapat diakses melalui `/docs`.

```js
const express = require('express');
const app = express();
const { specs, swaggerUi } = require('./swagger.js');
const PORT = 3000;

app.use(express.json());

const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000,
        "bakmi rica-rica": 28000,
        "bakmi komplit (bakso pangsit)": 35000
    },
    rames: {
        "nasi rames biasa": 15000,
        "nasi rames rendang": 25000,
        "nasi rames telur balado": 18000
    }
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/** @swagger
 * /:
 *   get:
 *     summary: Halaman utama API
 */
app.get('/', (req, res) => {
    res.json({ "pesan": "Cek /docs untuk melihat rincian API" });
});

/** @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 */
app.get('/menu', (req, res) => {
    res.json({ "kategori_tersedia": Object.keys(menuData) });
});

/** @swagger
 * /menu/{category}:
 *   get:
 *     summary: Menu berdasarkan kategori (bakmi / rames)
 */
app.get('/menu/:category', (req, res) => {
    const menu = menuData[req.params.category];
    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
```
