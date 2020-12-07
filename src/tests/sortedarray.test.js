const { getSortedArray } = require('../controllers/RecipeController');

test('get valid ordered items', () => {
  expect(getSortedArray('onion, bacon,rib')).toStrictEqual(['bacon', 'onion', 'rib']);
});

test('get invalid ordered items', () => {
  expect(getSortedArray(1)).toStrictEqual({"erro": "Invalid parameter."});
});