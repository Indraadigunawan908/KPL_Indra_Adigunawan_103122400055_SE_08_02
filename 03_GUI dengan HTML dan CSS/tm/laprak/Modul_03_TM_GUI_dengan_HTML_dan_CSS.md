# Modul 03 – GUI dengan HTML dan CSS
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Editor teks mini yang menghitung jumlah karakter, huruf besar, dan huruf kecil secara real-time menggunakan event listener `input`. Dua tombol tersedia untuk mengubah seluruh teks menjadi huruf besar atau huruf kecil.

```js
const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    charCountElement.textContent = text.length;

    let upperCount = 0;
    let lowerCount = 0;

    for (let char of text) {
        if (char >= "A" && char <= "Z") upperCount++;
        else if (char >= "a" && char <= "z") lowerCount++;
    }

    upperCountElement.textContent = upperCount;
    lowerCountElement.textContent = lowerCount;
});

upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});
```
