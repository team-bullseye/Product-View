const faker = require('faker');
const fs = require('fs');
const db = require('../db/index.js');
const mongoose = require('mongoose');
const csv = require('csvtojson');


db.remove({})
  .then((results) => {
    console.log('Deleted all items')
  })
  .catch((err) => {
    console.log('Did not delete items')
  })

var data = 'id,item,price,imgUrl,system\n';
for (var i = 1; i < 10; i++) {
  data += '' + i + ',' + faker.commerce.productName() + ',' + faker.commerce.price() + ',' +  faker.image.cats() + ',' + faker.vehicle.model() + '\n';
}
fs.appendFile('./data.csv', data, 'utf8', (err, results) => {
  console.log('file appended')
})

csv()
  .fromFile('./data.csv')
  .then((jsonData)=> {
    // db.insertMany(jsonData)
    //   .then((result) => {
    //     console.log('Data seeded');
    //     console.log('jsonData', jsonData);
    //   })
    //   .catch((err) => {
    //     console.log('error seeding', err);
    //   })
    console.log(jsonData);
  })
  .catch((err) => {
    console.log('didt not convert to json', err);
  })