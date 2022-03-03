const isConsonant = function (letter) {
  const allConsonants = "bcdfghjklmnpqrstvwxyz";
  return allConsonants.includes(letter.toLowerCase());
}

const countConsonants = function (string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    const letter = string[index];
    if (isConsonant(letter)) {
      count = count + 1;
    }
  }
  return count;
}

const testCountConsonants = function (string, expectedCount, message) {
  let mark = "✓"
  if (countConsonants(string) !== expectedCount) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const countConsonantsTests = function () {
  testCountConsonants("b", 1, "Single consonants b");
  testCountConsonants("f", 1, "Single consonants f");
  testCountConsonants("gg", 2, "Single repeated consonants");
  testCountConsonants("apple", 3, "When string only contain alphabet");
  testCountConsonants("aPple", 3, "When string contain Capital letter");
  testCountConsonants("5 apple", 3, "When string contain number and space");
}

countConsonantsTests();