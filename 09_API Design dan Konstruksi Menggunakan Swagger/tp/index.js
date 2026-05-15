const express = require('express');
const app = express();
const { specs, swaggerUi } = require('./swagger.js');

const PORT = 3000;

app.use(express.json());

// Data menu makanan
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

// Endpoint dokumentasi Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Halaman utama API
 *     description: Menampilkan pesan selamat datang dan petunjuk ke dokumentasi API
 *     responses:
 *       200:
 *         description: Pesan berhasil ditampilkan
 */
app.get('/', (req, res) => {
    const landing = {
        "pesan": "Cek /docs untuk melihat rincian API"
    };
    res.json(landing);
});

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     description: Menampilkan daftar semua nama kategori menu yang tersedia
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
app.get('/menu', (req, res) => {
    const kategori = Object.keys(menuData);
    res.json({ "kategori_tersedia": kategori });
});

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: Menu-menu makanan yang tersedia
 *     description: Mengambil daftar menu berdasarkan kategori. Kategori yang tersedia adalah "bakmi" dan "rames".
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Kategori menu (contoh bakmi atau rames)
 *     responses:
 *       200:
 *         description: Menu berhasil ditampilkan
 *       404:
 *         description: Menu tidak ditemukan
 */
app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menu = menuData[category];

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
