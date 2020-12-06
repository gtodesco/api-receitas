require("dotenv/config");

const axios = require("axios");

getSortedArray = (string) => {

    arrString = string.split(",");

    arrString = arrString.map((string) => {
        return string.trim();
    });

    arrString = arrString.sort();

    return arrString;
}

getRecipes = async (ingredients) => {
    try {
        const result = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);

        return result.data.results;
    } catch(e) {
        return {erro: "Recipe service unavailable."}
    }
}

getGif = async (keyword) => {
    try {
        
        const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${keyword}&limit=1`);

        return result.data.data.length > 0 ? result.data.data[0].url : "No gif.";

    } catch(e) {
        return {erro: "Gif service unavailable."}
    }
}

module.exports = {
    async getRecipes(req, res) {
        try {

            if (!req.query.i) {
                throw "No ingredient.";
            }

            const ingredients = req.query.i;
            const keywords = getSortedArray(ingredients);
            
            if (keywords.length > 3) {
                throw "Informed more than 3 ingredients.";
            }

            const recipesPuppy = await getRecipes(ingredients);

            if (recipesPuppy.erro) {
                throw recipesPuppy.erro;
            }

            let recipes = [];

            for (const recipe of recipesPuppy) {

                let gif = await getGif(recipe.title);

                if (gif.erro) {
                    throw gif.erro;
                }

                recipes.push({
                    title: recipe.title,
                    ingredients: getSortedArray(recipe.ingredients),
                    link: recipe.href,
                    gif
                });
            }

            return res.json({keywords, recipes});

        } catch(erro) {
            return res.status(400).json({erro});
        }

    }
}