function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  // BUG 1 (SEBELUM): data.toLowerCase()
  // Kecacatan: Method .toLowerCase() hanya tersedia pada tipe String.
  // Array `data` berisi elemen bertipe number (456, 78.9) dan boolean (true),
  // sehingga memanggil .toLowerCase() pada nilai tersebut akan melempar error:
  // "TypeError: data.toLowerCase is not a function"
  //
  // PERBAIKAN: Gunakan String(data) untuk mengonversi semua tipe data ke string
  // terlebih dahulu sebelum memanggil .toLowerCase().
  const str = String(data).toLowerCase(); // ✅ Perbaikan Bug 1

  // BUG 2 (SEBELUM): parseInt(str)
  // Kecacatan: parseInt() memotong bagian desimal, sehingga "78.9" menjadi 78.
  // Akibatnya pengecekan str === String(num) → "78.9" === "78" bernilai false,
  // dan bilangan desimal seperti 78.9 salah diklasifikasikan sebagai teks.
  //
  // PERBAIKAN: Gunakan parseFloat() agar bilangan desimal tetap terbaca utuh.
  const num = parseFloat(str); // ✅ Perbaikan Bug 2

  if (!isNaN(num) && str === String(num)) {
    return `Number: ${num * 2}`;
  }
  return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();
