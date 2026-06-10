# TP 14 – Clean Code Refactoring

## Kode Asli

```javascript
function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(order => {
        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');
        detailsDiv.innerHTML = '';

        const header = document.createElement('h3');
        header.textContent = `Order ID: ${order.id}`;
        detailsDiv.appendChild(header);

        const status = document.createElement('p');
        status.textContent = `Status: ${order.status}`;
        detailsDiv.appendChild(status);

        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        const confirmBtn = modal.querySelector('#confirmOrderBtn');
        if (order.status === 'Delivered') {
            confirmBtn.style.display = 'none';
        } else {
            confirmBtn.addEventListener('click', () => {
                confirmOrder(order.id, token);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
```

---

## Masalah yang Ditemukan

| # | Prinsip yang Dilanggar | Keterangan |
|---|----------------------|------------|
| 1 | **Satu fungsi, satu pekerjaan** | `fetchOrderDetails` melakukan tiga hal sekaligus: fetch data, render UI, dan pasang event listener |
| 2 | **Nama bermakna** | Nama fungsi mengandung kata "fetch", padahal ia juga merender modal dan mengelola event |
| 3 | **Hindari komentar yang hanya menjelaskan apa** | `// Display order info`, `// Show modal`, `// Setup close button` hanya mengulang apa yang kode sudah katakan sendiri |
| 4 | **Gunakan `async/await`** | `.then().then()` berantai lebih sulit dibaca dibanding `async/await` yang mengalir linear |

---

## Kode Setelah Refaktorisasi

```javascript
async function fetchOrderDetails(orderId, token) {
    const order = await getOrder(orderId, token);
    tampilkanModalPesanan(order, token);
}

async function getOrder(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: { 'Authorization': token }
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil detail pesanan');
    }

    return response.json();
}

function tampilkanModalPesanan(order, token) {
    const modal = document.getElementById('orderModal');

    renderDetailPesanan(modal, order);
    pasangTombolTutup(modal);
    pasangTombolKonfirmasi(modal, order, token);

    modal.style.display = 'block';
}

function renderDetailPesanan(modal, order) {
    const detailsDiv = modal.querySelector('#orderDetails');
    detailsDiv.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    detailsDiv.appendChild(header);

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;
    detailsDiv.appendChild(status);
}

function pasangTombolTutup(modal) {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

function pasangTombolKonfirmasi(modal, order, token) {
    const confirmBtn = modal.querySelector('#confirmOrderBtn');
    const sudahTerkirim = order.status === 'Delivered';

    if (sudahTerkirim) {
        confirmBtn.style.display = 'none';
        return;
    }

    confirmBtn.addEventListener('click', () => {
        confirmOrder(order.id, token);
    });
}
```

---

## Penjelasan Perubahan

**Fungsi dipecah sesuai tanggung jawabnya.** `fetchOrderDetails` sekarang hanya menjadi koordinator — ia memanggil `getOrder` untuk data, lalu `tampilkanModalPesanan` untuk tampilan. Setiap fungsi melakukan satu hal.

**`async/await` menggantikan `.then()` berantai.** Kode mengalir dari atas ke bawah seperti membaca cerita, bukan piramida callback.

**Komentar yang hanya menjelaskan "apa" dihapus.** Nama fungsi seperti `renderDetailPesanan`, `pasangTombolTutup`, dan `pasangTombolKonfirmasi` sudah cukup berbicara sendiri tanpa perlu komentar `// Setup close button`.

**Early return** dipakai di `pasangTombolKonfirmasi` untuk menghindari blok `else` yang tidak perlu.
