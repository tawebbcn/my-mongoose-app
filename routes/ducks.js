const express = require('express');
const router = express.Router();

const Duck = require('../models/duck');

/* GET ducks page. */
router.get('/', (req, res, next) => {
  // R in CRUD
  Duck.find()
    .then((result) => {
      res.render('ducks/list-ducks', { ducks: result });
    })
    .catch(next);
});

// Render the create duck form
router.get('/create', (req, res, next) => {
  res.render('ducks/create-duck', { title: 'Duck Express' });
});

// Receive the duck post
router.post('/', (req, res, next) => {
  // C in CRUD
  Duck.create(req.body)
    .then((result) => {
      console.log('Result:' + result);
      res.redirect('/ducks');
    })
    .catch(next);
});

router.get('/:duckId/edit', (req, res, next) => {
  const duckId = req.params.duckId;

  Duck.findById(duckId)
    .then((duck) => {
      res.render('ducks/edit-duck', { duck });
    })
    .catch(next);
});

// U in CRUD
router.post('/:duckId/edit', (req, res, next) => {
  const duckId = req.params.duckId;
  const updatedDuckInformation = req.body;

  Duck.findByIdAndUpdate(duckId, { $set: updatedDuckInformation })
    .then((duck) => {
      res.redirect('/ducks');
    })
    .catch(next);
});

// D in CRUD
router.post('/:duckId/delete', (req, res, next) => {
  const duckId = req.params.duckId;
  Duck.deleteOne({ _id: duckId })
    .then((result) => {
      res.redirect('/ducks');
    })
    .catch(next);
});

module.exports = router;
