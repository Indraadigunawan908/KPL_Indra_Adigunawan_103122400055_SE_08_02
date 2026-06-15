# Modul 06 – Design By Contract dan Defensive Programming
## Tugas Mandiri

**Nama:** Indra Adigunawan
**NIM:** 103122400055

---

Fungsi `is_not_fizzbuzz` menerapkan prinsip Design by Contract dengan validasi pre-condition yang ketat. Hanya bilangan bulat finite yang diterima; input `null`, `NaN`, `Infinity`, atau non-integer akan melempar `TypeError`.

```js
function is_not_fizzbuzz(number) {
  if (typeof number !== 'number' || !Number.isFinite(number) || !Number.isInteger(number)) {
    throw new TypeError(`Input tidak valid: ${number} bukan bilangan bulat`);
  }

  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }

  return true;
}

console.log(is_not_fizzbuzz(1));   // true
console.log(is_not_fizzbuzz(3));   // false
console.log(is_not_fizzbuzz(30));  // false

try { is_not_fizzbuzz(null);     } catch (e) { console.log('null →', e.message); }
try { is_not_fizzbuzz(NaN);      } catch (e) { console.log('NaN →', e.message); }
try { is_not_fizzbuzz(Infinity); } catch (e) { console.log('Infinity →', e.message); }
```
