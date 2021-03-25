const { User } = require( '../models' );


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
   },
   {
      username: 'shells6',
      password: 'pwd666'
   },
   {
      username: 'shells7',
      password: 'pwd777'
   },
   {
      username: 'shells8',
      password: 'pwd888'
   }
];


const seedUsers = () => User.bulkCreate( userData, { individualHooks: true, returning: true } );


module.exports = seedUsers;