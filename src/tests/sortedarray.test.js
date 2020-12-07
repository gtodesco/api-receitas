const { getSortedArray } = require('../controllers/RecipeController');

test('get ordered items', () => {
  expect(getSortedArray('onion, bacon,rib')).toStrictEqual(['bacon', 'onion', 'rib']);
});
