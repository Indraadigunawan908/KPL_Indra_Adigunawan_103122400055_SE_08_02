const editorElement = document.getElementById("editor-kecil");
const hk = document.getElementById("hk");
const hb = document.getElementById("hb");
const charCountElement = document.getElementById("hf");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");
const buttonSopiaElement = document.getElementById("tombol-sopia");

editorElement.addEventListener("input", (event) =>{
    const textLength = event.target.value;
    const totalHuruf = (textLength.match(/[a-zA-Z]/g) || []).length;
    const hurufBesar = (textLength.match(/[A-Z]/g) || []).length;
    const hurufKecil = (textLength.match(/[a-z]/g) || []).length;

    charCountElement.textContent = totalHuruf;
    hb.textContent = hurufBesar;
    hk.textContent = hurufKecil; 
});



btnBesar.addEventListener ("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    editorElement.dispatchEvent(new Event("input"));
});

btnKecil.addEventListener ("click", ()=> {
    editorElement.value = editorElement.value.toLowerCase();
    editorElement.dispatchEvent(new Event("input"));
});

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("mode-gelap");
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.add("mode-gelap");
});


//Menambahkan listener 
buttonSopiaElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("mode-gelap");
});

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("mode-sopia");
});
buttonSopiaElement.addEventListener("click", (event) =>{
    document.documentElement.classList.add("mode-sopia"); 
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("mode-sopia");
})