// addition.test.js
const addition = require('./addition');

test('additionne 2 + 3 pour donner 5', () => {
  expect(addition(2, 3)).toBe(5);
});
