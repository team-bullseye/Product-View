const db = require('../db/models.js');
const games = require('../db/index.js');
const controller = {
  get: (req, res) => {
    db.find()
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  post: (req, res) => {
    db.create(req.body)
    .then(() => {
      res.status(200).send('You posted!')
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  delete: (req, res) => {
    db.remove({})
      .then(() => {
        res.status(200).send("All entries deleted");
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  getOne: (req, res) => {
    games.findOne(req.params)
      .then((results) => {
        console.log('Successfull getOne', results);
        res.status(200).json(results);
      })
      .catch((err) => {
        console.error('error getting one', err);
        res.status(400).send(err);
      })
  },
  postOne: (req, res) => {
    games.create(req.body)
    .then((results) => {
      console.log('Successfull postOne', results);
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error('error posting one', err);
      res.status(400).send(err);
    })
  },
  putOne: (req, res) => {
    games.findOneAndUpdate(req.params, req.body)
    .then((results) => {
      console.log('Successfull putOne', results);
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error('error putting one', err);
      res.status(400).send(err);
    })
  },
  deleteOne: (req, res) => {
    games.deleteOne(req.params)
    .then((results) => {
      console.log('Successfull deleteOne', results);
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error('error deleting one', err);
      res.status(400).send(err);
    })
  },
}

module.exports = controller;