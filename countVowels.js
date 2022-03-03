const isVowel = function (letter) {
  const allVowel = "aeiou";
  return allVowel.includes(letter.toLowerCase());
}

const countVowels = function (string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    const letter = string[index];
    if (isVowel(letter)) {
      count = count + 1;
    }
  }
  return count;
}

const testCountVowels = function (string, expectedCount, message) {
  let mark = "✓"
  if (countVowels(string) !== expectedCount) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const countVowelsTests = function () {
  testCountVowels("a", 1, "Single vowel a");
  testCountVowels("e", 1, "Single vowel e");
  testCountVowels("aa", 2, "Single repeated vowel");
  testCountVowels("apple", 2, "When string only contain alphabet");
  testCountVowels("Apple", 2, "When string contain Capital letter");
  testCountVowels("5 apple", 2, "When string contain number and space");
}

countVowelsTests();