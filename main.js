function ganjilGenap(input){
    if (input %2 === 0){
        return true;
    }
}


function absoluteValue (input){
    if(input<0){
        return -input;

    }
    return input;
}

let apakahGenap = absoluteValue(-145);
console.log(apakahGenap);