require('dotenv/config');

const axios = require('axios');

const getSortedArray = (string) => {
  try {
    if (typeof string !== 'string') {
      throw new Error();
    }

    let arrWords = string.split(',');

    arrWords = arrWords.map((word) => word.trim());

    arrWords = arrWords.sort();

    return arrWords;
  } catch (e) {
    return { erro: 'Invalid parameter.' };
  }
};

const getRecipes = async (ingredients) => {
  try {
    const result = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);

    return result.data.results;
  } catch (e) {
    return { erro: 'Recipe service unavailable.' };
  }
};

const getGif = async (keyword) => {
  try {
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${keyword}&limit=1`);

    return result.data.data.length > 0 ? result.data.data[0].url : 'No gif.';
  } catch (e) {
    return { erro: 'Gif service unavailable.' };
  }
};

module.exports = {
  getSortedArray,

  async getRecipes(req, res) {
    try {
      if (!req.query.i) {
        throw new Error('No ingredient.');
      }

      const ingredients = req.query.i;
      const keywords = getSortedArray(ingredients);

      if (keywords.length > 3) {
        throw new Error('Informed more than 3 ingredients.');
      }

      const recipesPuppy = await getRecipes(ingredients);

      if (recipesPuppy.erro) {
        throw new Error(recipesPuppy.erro);
      }

      const recipes = [];

      for (const recipe of recipesPuppy) {
        const gif = await getGif(recipe.title);

        if (gif.erro) {
          throw new Error(gif.erro);
        }

        recipes.push({
          title: recipe.title,
          ingredients: getSortedArray(recipe.ingredients),
          link: recipe.href,
          gif,
        });
      }

      return res.json({ keywords, recipes });
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  },
};
