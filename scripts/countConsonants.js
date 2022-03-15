const isConsonant = function (letter) {
  return 'bcdfghjklmnpqrstvwxyz'.includes(letter.toLowerCase());
};

const countConsonants = function (text) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (isConsonant(text[index])) {
      count = count + 1;
    }
  }
  return count;
};

const testCountConsonants = function (text, expectedCount, message) {
  const testPassed = countConsonants(text) === expectedCount;
  const status = testPassed ? '✅' : '❌';

  console.log(status, ' - ', message);
  return testPassed;
};

const countConsonantsTests = function () {
  testCountConsonants('b', 1, 'Single consonant b');
  testCountConsonants('g', 1, 'Single consonant g');
  testCountConsonants('B', 1, 'Single capital consonant B');
  testCountConsonants('bb', 2, 'Single repeated consonant');

  testCountConsonants('', 0, 'No consonants');
  testCountConsonants('a', 0, 'Single vowel');
  testCountConsonants('5', 0, 'Text contain number');
};

countConsonantsTests();