import * as dotenv from "dotenv";
dotenv.config({ quiet: true });

const BASE_API = process.env.BASE_API;
const nominals = [25000, 50000, 100000];

const res = await fetch(`${BASE_API}/latest?from=IDR&to=CNY,EUR`);
const data = await res.json();

const { CNY, EUR } = data.rates;
const date = new Date(data.date);

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const cnyFormatter = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const eurFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const idrFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

for (const nominal of nominals) {
  const idrStr = idrFormatter.format(nominal);
  const cnhStr = cnyFormatter.format(nominal * CNY);
  const eurStr = eurFormatter.format(nominal * EUR);
  console.log(`Kurs ${idrStr} pada ${dateFormatter.format(date)} adalah ${cnhStr} dan ${eurStr}`);
}