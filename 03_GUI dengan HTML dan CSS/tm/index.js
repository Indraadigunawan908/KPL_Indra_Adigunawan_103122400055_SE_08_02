const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", (event) => {

    const text = event.target.value;
    const textLength = text.length;

    charCountElement.textContent = textLength;

    let upperCount = 0;
    let lowerCount = 0;

    for (let char of text){
        if (char >= "A" && char <= "Z"){
            upperCount++;
        } 
        else if (char >= "a" && char <= "z"){
            lowerCount++;
        }
    }

    upperCountElement.textContent = upperCount;
    lowerCountElement.textContent = lowerCount;

});

upperButton.addEventListener("click", () => {
    const text = editorElement.value;
    editorElement.value = text.toUpperCase();
});

lowerButton.addEventListener("click", () => {
    const text = editorElement.value;
    editorElement.value = text.toLowerCase();
});