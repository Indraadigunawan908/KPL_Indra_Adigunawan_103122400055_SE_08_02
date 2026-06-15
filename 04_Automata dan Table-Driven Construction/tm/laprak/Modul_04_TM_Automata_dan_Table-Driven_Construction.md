# Modul 04 – Automata dan Table-Driven Construction
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Pengembangan editor teks dengan tambahan fitur pergantian tema (terang, gelap, sepia). Setiap klik tombol tema memicu transisi state dengan memanipulasi class CSS pada `documentElement` — implementasi sederhana dari konsep automata. Penghitungan huruf juga diperbarui menggunakan regex.

```js
const editorElement = document.getElementById("editor-kecil");

editorElement.addEventListener("input", (event) => {
    const textLength = event.target.value;
    const totalHuruf = (textLength.match(/[a-zA-Z]/g) || []).length;
    const hurufBesar = (textLength.match(/[A-Z]/g) || []).length;
    const hurufKecil = (textLength.match(/[a-z]/g) || []).length;

    charCountElement.textContent = totalHuruf;
    hb.textContent = hurufBesar;
    hk.textContent = hurufKecil;
});

// State machine tema
buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap", "mode-sopia");
});

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-sopia");
    document.documentElement.classList.add("mode-gelap");
});

buttonSopiaElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
    document.documentElement.classList.add("mode-sopia");
});
```
