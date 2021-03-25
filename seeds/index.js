const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
   await sequelize.sync({ force: true });
   console.log('*********************************');
   console.log('******** DATABASE SYNCED ********');
   console.log('*********************************\n');

   await seedUsers();
   console.log('*****************************');
   console.log('***** USER TABLE SEEDED *****');
   console.log('*****************************\n');

   await seedPosts();
   console.log('*****************************');
   console.log('***** POST TABLE SEEDED *****');
   console.log('*****************************\n');

   await seedComments();
   console.log('********************************');
   console.log('***** COMMENT TABLE SEEDED *****');
   console.log('********************************\n');

   process.exit(0);
};


seedAll();