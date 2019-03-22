const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    res.render("index", { burgers: data });
  });
});

router.post('/api/new-burger', (req, res) => {
  burger.insertOne(['burger_name', 'devoured'], 
  [req.body.burger_name, req.body.devoured], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/update-burger/:id', (req, res) => {
  let id = `id = ${req.params.id}`;
  burger.updateOne({
    devoured: req.body.devoured
  }, id, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/delete-burger/:id", (req, res) => {
  let id = `id = ${req.params.id}`;
  burger.delete(id, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;