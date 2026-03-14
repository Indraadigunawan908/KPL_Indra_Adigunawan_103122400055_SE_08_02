const inputTeks = document.getElementById("editor-kecil");
const infoTotal = document.getElementById("hf");
const infoBesar = document.getElementById("hb");
const infoKecil = document.getElementById("hk");
const tombolBesar = document.getElementById("huruf-besar");
const tombolKecil = document.getElementById("huruf-kecil");
inputTeks.addEventListener("input", function() {
    let teks = inputTeks.value;
    infoTotal.textContent = teks.length;
    let listBesar = teks.match(/[A-Z]/g);
    infoBesar.textContent = listBesar ? listBesar.length : 0;
    let listKecil = teks.match(/[a-z]/g);
    infoKecil.textContent = listKecil ? listKecil.length : 0;
});
tombolBesar.onclick = function() {
    inputTeks.value = inputTeks.value.toUpperCase();
    inputTeks.dispatchEvent(new Event('input'));
};
tombolKecil.onclick = function() {
    inputTeks.value = inputTeks.value.toLowerCase();
    inputTeks.dispatchEvent(new Event('input'));
};