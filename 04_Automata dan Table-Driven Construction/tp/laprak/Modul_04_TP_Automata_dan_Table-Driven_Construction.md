# Modul 04 – Automata dan Table-Driven Construction
## Tugas Praktikum

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

TP mengimplementasikan hal serupa dengan dua mode tema (terang dan gelap) tanpa mode sepia.

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

buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
});

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.add("mode-gelap");
});
```
