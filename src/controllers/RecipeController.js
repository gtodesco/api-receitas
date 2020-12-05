const axios = require("axios");

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
            const arrIngredients = ingredients.split(",").sort();
            
            if (arrIngredients.length > 3) {
                throw "Informed more than 3 ingredients.";
            }

            let recipes = await getRecipes(ingredients);

            if (recipes.erro) {
                throw recipes.erro;
            }

            return res.json({ingredients, arrIngredients, recipes});

        } catch(erro) {
            return res.status(400).json({erro});
        }

    }
}