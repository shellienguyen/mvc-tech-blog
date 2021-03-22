const { User } = require( '../models' );


const userData = [
   {
      username: 'shells1',
      email: 'shells1@gmail.com',
      password: 'pwd111'
   },
   {
      username: 'shells2',
      email: 'shells2@gmail.com',
      password: 'pwd222'
   },
   {
      username: 'shells3',
      email: 'shells3@gmail.com',
      password: 'pwd333'
   },
   {
      username: 'shells4',
      email: 'shells4@gmail.com',
      password: 'pwd444'
   },
   {
      username: 'shells5',
      email: 'shells5@gmail.com',
      password: 'pwd555'
   }
];


const seedUsers = () => User.bulkCreate( userData );


module.exports = seedUsers;