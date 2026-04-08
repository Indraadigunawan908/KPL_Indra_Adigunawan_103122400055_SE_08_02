const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const uperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => {

    const text = event.target.value; 
    const textLength = text.length;

    charCountElement.textContent = textLength;

    let upperCount = 0;
    let lowerCount = 0;

    for (let char of text){
        (char >= "A" && char <= "Z")
            ? upperCount++
            : (char >= "a" && char <= "z")
            ? lowerCount++
            : null;
    }

    uperCountElement.textContent = upperCount;
    lowerCountElement.textContent = lowerCount;

});