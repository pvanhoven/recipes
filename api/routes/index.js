const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (_, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/test2', (_, res) => {
  res.send('some stuff');
});

router.get('/test3', (_, res) => {
  res.json({ prop1: 'asdf', prop2: 4 });
});

module.exports = router;
