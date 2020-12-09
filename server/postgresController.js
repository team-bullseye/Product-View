const client = require('../db/postgresIndex.js');
const maxLength = 10000000;
const controller = {

  getRandom: (req, res) => {
    var random = Math.floor(Math.random() * maxLength) + 1;
    client.query(`SELECT * FROM game WHERE id=${random}`, (err, result) => {
      if (err) {
        console.log('Error retreiving One', err);
        res.status(400).send(err);
      }
      console.log('Successful load');
      res.status(200).json(result.rows[0]);
    })
    // games.findOne({id: random})
    //   .then((results) => {
    //     console.log('Successfull getOne', results);
    //     res.status(200).json(results);
    //   })
    //   .catch((err) => {
    //     console.error('error getting one', err);
    //     res.status(400).send(err);
    //   })
  },

  // CRUD Operations
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