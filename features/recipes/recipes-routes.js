const express = require('express');
const Recipes = require('./get-all-recipes-command');

const router = express.Router();

router.get('/', async (_, res) => {
  const rec = new Recipes();
  res.send(await rec.getAllRecipes());
});

router.get('/test', (_, res) => {
  res.send('recipes');
});

module.exports = router;
