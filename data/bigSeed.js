const faker = require('faker');
const fs = require('fs');
const mongoose = require('mongoose');
const maxLength = 10000000;

// Generates csv file with mock data for db
var image = 'https://loremflickr.com/320/240'
var data = 'id,item,price,imgUrl,system\n';
for (var i = 0; i < maxLength; i++) {
  data += `${i},${faker.commerce.productName()},${faker.commerce.price()},${faker.image.image()},${faker.vehicle.model()}\n`;
}
fs.appendFile('./data.csv', data, 'utf8', (err, results) => {
  console.log('file appended')
})
