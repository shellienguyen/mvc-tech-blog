const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
   await sequelize.sync({ force: true });
   console.log('\n----- DATABASE SYNCED -----\n');

   await seedUsers();
   console.log('\const ----- USER TABLE SEEDED -----*\n');

   await seedPosts();
   console.log('\const ----- POST TABLE SEEDED -----*\n');

   await seedComments();
   console.log('\const ----- COMMENT TABLE SEEDED -----*\n');

   process.exit(0);
};


seedAll();