const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;

const {
  getValues
} = require('../models/checkVal.js');

router.get('/compare', (req, res) => {
  getValues()
    .then(value => {
      if (value[0] < 0) {
        res.status(STATUS_SUCCESS)
        res.send({ fallen: new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(Math.abs(value[0])) })
      } else {
        res.status(STATUS_SUCCESS)
        res.send({ risen: new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(Math.abs(value[0])) })
      }
    })
    .catch(err => {
      res.send({ error: err })
    });
})

module.exports = router;
