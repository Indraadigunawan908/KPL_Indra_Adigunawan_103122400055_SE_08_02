# Modul 08 – Runtime Configuration dan Internationalization
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Program mengambil konfigurasi URL API dari environment variable (`dotenv`), lalu fetch kurs IDR ke CNY dan EUR. Hasilnya diformat menggunakan `Intl.NumberFormat` dan `Intl.DateTimeFormat` sesuai locale masing-masing mata uang.

```js
import * as dotenv from "dotenv";
dotenv.config({ quiet: true });

const BASE_API = process.env.BASE_API;
const nominals = [25000, 50000, 100000];

const res = await fetch(`${BASE_API}/latest?from=IDR&to=CNY,EUR`);
const data = await res.json();
const { CNY, EUR } = data.rates;
const date = new Date(data.date);

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric", month: "long", year: "numeric",
});

const cnyFormatter = new Intl.NumberFormat("zh-CN", {
  style: "currency", currency: "CNY",
  minimumFractionDigits: 2, maximumFractionDigits: 2,
});

const eurFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency", currency: "EUR",
  minimumFractionDigits: 2, maximumFractionDigits: 2,
});

const idrFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency", currency: "IDR", minimumFractionDigits: 0,
});

for (const nominal of nominals) {
  console.log(
    `Kurs ${idrFormatter.format(nominal)} pada ${dateFormatter.format(date)} ` +
    `adalah ${cnyFormatter.format(nominal * CNY)} dan ${eurFormatter.format(nominal * EUR)}`
  );
}
```
