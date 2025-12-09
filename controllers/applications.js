const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello Apps index');
});

module.exports = router;
