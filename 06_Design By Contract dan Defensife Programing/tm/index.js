function is_not_fizzbuzz(number) {
  if (typeof number !== 'number' || !Number.isFinite(number) || !Number.isInteger(number)) {
    throw new TypeError(`Input tidak valid: ${number} bukan bilangan bulat`);
  }

  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }

  return true;
}

// Test
console.log(is_not_fizzbuzz(1));   // true
console.log(is_not_fizzbuzz(3));   // false
console.log(is_not_fizzbuzz(5));   // false
console.log(is_not_fizzbuzz(30));  // false
console.log(is_not_fizzbuzz(7));   // true

try { console.log(is_not_fizzbuzz(null));     } catch (e) { console.log('null →', e.message); }
try { console.log(is_not_fizzbuzz(NaN));      } catch (e) { console.log('NaN →', e.message); }
try { console.log(is_not_fizzbuzz(Infinity)); } catch (e) { console.log('Infinity →', e.message); }