const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;

const {
  getValues
} = require('../models/checkVal.js');

router.get('/compare', (req, res) => {
  getValues()
    .then(values => res.send(values))
    .catch(err => res.send(err));
})

module.exports = router;
