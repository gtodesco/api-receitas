module.exports = {
    async getRecipes(req, res) {
        try {

            if (!req.query.i) {
                throw "No ingredient.";
            }

            const ingredients = req.query.i.split(",").sort();
            
            if (ingredients.length > 3) {
                throw "Informed more than 3 ingredients.";
            }



            return res.json(ingredients);

        } catch(erro) {
            return res.status(400).json({erro});
        }

    }
}