const { User } = require('../models');


const userData = [
   {
      username: 'shells1',
      password: 'pwd111'
   },
   {
      username: 'shells2',
      password: 'pwd222'
   },
   {
      username: 'shells3',
      password: 'pwd333'
   },
   {
      username: 'shells4',
      password: 'pwd444'
   },
   {
      username: 'shells5',
      password: 'pwd555'
   }
];


const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;