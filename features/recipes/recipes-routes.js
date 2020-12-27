const express = require('express');
const { getAllRecipesCommand } = require('./get-all-recipes-command');
const createRecipe = require('./create-recipe');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('abcdefg');
  console.log(req.query);
  res.send(await getAllRecipesCommand());
});

router.post('/', async (req, res) => {
  res.send(await createRecipe(req.body));
});

router.get('/test', (_, res) => {
  res.send('recipes');
});

module.exports = router;
