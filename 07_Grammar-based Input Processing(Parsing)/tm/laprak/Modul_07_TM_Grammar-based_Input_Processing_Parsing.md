# Modul 07 – Grammar-based Input Processing (Parsing)
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Fungsi `parseRobots` menguraikan file `robots.txt` menjadi array of plain JavaScript object menggunakan state machine sederhana. `User-agent` memulai blok baru, baris kosong menutup blok aktif, dan direktif lainnya dikumpulkan ke dalam blok yang sedang aktif.

```js
function parseRobots(robotsTxt) {
  const result = [];
  let currentBlock = null;

  const lines = robotsTxt.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "" || trimmed.startsWith("#")) {
      if (trimmed === "" && currentBlock !== null) {
        result.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    if (key === "User-agent") {
      if (currentBlock !== null) result.push(currentBlock);
      currentBlock = { userAgent: value, allow: [], disallow: [], sitemap: [] };
    }

    if (currentBlock === null) continue;

    if (key === "Allow" && value)         currentBlock.allow.push(value);
    else if (key === "Disallow" && value) currentBlock.disallow.push(value);
    else if (key === "Sitemap" && value)  currentBlock.sitemap.push(value);
  }

  if (currentBlock !== null) result.push(currentBlock);

  return result;
}

module.exports = { parseRobots };
```
