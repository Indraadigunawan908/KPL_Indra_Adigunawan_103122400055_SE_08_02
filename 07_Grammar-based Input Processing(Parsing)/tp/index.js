function toNumberArray(number) {
  // Kalau input array, langsung pakai; kalau string, split dulu
  const parts = Array.isArray(number)
    ? number
    : number.trim().split(",");

  return parts
    .map(item => item.trim())       // bersihkan spasi tiap elemen
    .map(item => Number(item))      // konversi ke angka
    .filter(item => !isNaN(item));  // buang yang bukan angka valid
}

console.log(toNumberArray("1, 2"))               // [1, 2]
console.log(toNumberArray(["1", "2"]))           // [1, 2]
console.log(toNumberArray(" 11,55,33   "))       // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]