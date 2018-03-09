const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;

const {
  getValues
} = require('../models/checkVal.js');

router.get('/compare', (req, res) => {
  getValues()
    .then(value => res.send(value))
    .catch(err => res.send({ error: err }));
})

module.exports = router;
