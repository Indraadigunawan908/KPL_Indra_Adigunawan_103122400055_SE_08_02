export function jumlahHuruf(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      count++;
    }
  }
  return count;
}

export function jumlahKata(str) {
  const kata = str.trim().split(/\s+/);
  let count = 0;
  for (const k of kata) {
    let adaHuruf = false;
    for (let i = 0; i < k.length; i++) {
      const c = k[i];
      if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        adaHuruf = true;
        break;
      }
    }
    if (adaHuruf) count++;
  }
  return count;
}
