const db = require('../db/index.js');
const mongoose = require('mongoose');
const maxLength = 10000000;

// Run this file to clear out the mongoDB collection
db.remove({})
.then((results) => {
  console.log('Deleted all items')
})
.catch((err) => {
  console.log('Did not delete items')
})

