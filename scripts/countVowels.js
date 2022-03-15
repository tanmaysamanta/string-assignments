const isVowel = function (character) {
  return 'aeiou'.includes(character.toLowerCase());
};

const countVowels = function (text) {
  let count = 0;
  for (let index = 0; index < text.length; index++) {
    if (isVowel(text[index])) {
      count = count + 1;
    }
  }
  return count;
};

const testCountVowels = function (text, expectedCount, message) {
  const testPassed = countVowels(text) === expectedCount;
  const status = testPassed ? '✅' : '❌';

  console.log(status, ' - ', message);
  return testPassed;
};

const countVowelsTests = function () {
  testCountVowels('a', 1, 'Single vowel a');
  testCountVowels('e', 1, 'Single vowel e');
  testCountVowels('i', 1, 'Single vowel i');
  testCountVowels('o', 1, 'Single vowel o');
  testCountVowels('u', 1, 'Single vowel u');

  testCountVowels('A', 1, 'Single capital vowel A');

  testCountVowels('aa', 2, 'Single repeated vowel');

  testCountVowels('', 0, 'No vowels');

  testCountVowels('b', 0, 'Single consonant');
  testCountVowels('B', 0, 'Single capital consonant');
  testCountVowels('5 apple', 2, 'When text contain number and space');
};

countVowelsTests();