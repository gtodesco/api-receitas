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
        const recipes = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);

        return recipes.data.results;
    } catch(e) {
        return {erro: "Recipe service unavailable."}
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

            recipesPuppy.forEach((recipe) => {
                recipes.push({
                    "title": recipe.title,
                    "ingredients": getSortedArray(recipe.ingredients),
                    "link": recipe.href,
                    "gif": ""
                })
            })

            return res.json({keywords, recipes});

        } catch(erro) {
            return res.status(400).json({erro});
        }

    }
}