/**
 * TM_07 - Uraikan Robot!
 * Fungsi untuk menguraikan isi robots.txt menjadi POJO
 *
 * Struktur output:
 * {
 *   userAgent: string,
 *   allow: string[],
 *   disallow: string[],
 *   sitemap: string[]
 * }[]
 */

/**
 * Menguraikan isi robots.txt menjadi array of POJO.
 * @param {string} robotsTxt - Isi file robots.txt sebagai string
 * @returns {Object[]} - Array of parsed robot rules
 */
function parseRobots(robotsTxt) {
  // STATE awal: belum ada blok yang sedang diproses
  const result = [];
  let currentBlock = null;

  // Pisahkan teks per baris
  const lines = robotsTxt.split("\n");

  for (const line of lines) {
    // Bersihkan spasi di awal dan akhir baris
    const trimmed = line.trim();

    // Lewati baris kosong dan komentar (#)
    if (trimmed === "" || trimmed.startsWith("#")) {
      // Baris kosong menandakan akhir blok saat ini
      // Simpan blok yang sedang diproses jika ada
      if (trimmed === "" && currentBlock !== null) {
        result.push(currentBlock);
        currentBlock = null; // Reset state
      }
      continue;
    }

    // Pisahkan key dan value berdasarkan tanda ":"
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue; // Baris tidak valid, lewati

    const key = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    // STATE: mulai blok baru ketika menemukan User-agent
    if (key === "User-agent") {
      // Jika sudah ada blok sebelumnya dan belum disimpan, simpan dulu
      if (currentBlock !== null) {
        result.push(currentBlock);
      }
      // Buat blok baru
      currentBlock = {
        userAgent: value,
        allow: [],
        disallow: [],
        sitemap: [],
      };
    }

    // Hanya proses properti lain jika sudah ada blok aktif
    if (currentBlock === null) continue;

    if (key === "Allow") {
      if (value !== "") currentBlock.allow.push(value);
    } else if (key === "Disallow") {
      if (value !== "") currentBlock.disallow.push(value);
    } else if (key === "Sitemap") {
      if (value !== "") currentBlock.sitemap.push(value);
    }
  }

  // Jangan lupa simpan blok terakhir jika file tidak diakhiri baris kosong
  if (currentBlock !== null) {
    result.push(currentBlock);
  }

  return result;
}

module.exports = { parseRobots };
