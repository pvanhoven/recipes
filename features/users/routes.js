const express = require('express');
const { createUserCommand } = require('./user-commands');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  res.send(await createUserCommand(req.body));
});

module.exports = router;
