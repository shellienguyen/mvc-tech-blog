const { Post } = require('../models');


const postData = [
   {
      title: 'Post Title for user_id 1. Lorem Ipsum I',
      content: 'Post Content for user_id 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user_id: 1

   },
   {
      title: 'Post Title for user_id 2. Lorem Ipsum II',
      content: 'Post Content for user_id 2 Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
      user_id: 2
   },
   {
      title: 'Post Title for user_id 3. Lorem Ipsum III',
      content: 'Post Content for user_id 3 Ut etiam sit amet nisl purus in mollis.',
      user_id: 3
   },
   {
      title: 'Post Title for user_id 4. Lorem Ipsum I',
      content: 'Post Content for user_id 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user_id: 4

   },
   {
      title: 'Post Title for user_id 5. Lorem Ipsum II',
      content: 'Post Content for user_id  5Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
      user_id: 5
   },
   {
      title: 'Post Title for user_id 1. Lorem Ipsum III',
      content: 'Post Content for user_id 1 Ut etiam sit amet nisl purus in mollis.',
      user_id: 1
   },
   {
      title: 'Post Title for user_id 4. Lorem Ipsum III',
      content: 'Post Content for user_id 4 Ut etiam sit amet nisl purus in mollis.',
      user_id: 4
   },
   {
      title: 'Post Title for user_id 5. Lorem Ipsum III',
      content: 'Post Content for user_id 5 Ut etiam sit amet nisl purus in mollis.',
      user_id: 5
   }
];


const seedPosts = () => Post.bulkCreate( postData );


module.exports = seedPosts;