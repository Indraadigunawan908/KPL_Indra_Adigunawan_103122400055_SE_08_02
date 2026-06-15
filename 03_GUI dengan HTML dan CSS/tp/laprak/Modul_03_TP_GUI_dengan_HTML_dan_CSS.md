# Modul 03 – GUI dengan HTML dan CSS
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Versi TP menyederhanakan logika penghitungan huruf menggunakan ternary operator berantai, tanpa fitur tombol ubah ke huruf besar/kecil.

```js
const editorElement = document.getElementById("editor-kecil");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    charCountElement.textContent = text.length;

    let upperCount = 0;
    let lowerCount = 0;

    for (let char of text) {
        (char >= "A" && char <= "Z")
            ? upperCount++
            : (char >= "a" && char <= "z")
            ? lowerCount++
            : null;
    }

    uperCountElement.textContent = upperCount;
    lowerCountElement.textContent = lowerCount;
});
```
