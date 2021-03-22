const { Comment } = require('../models');

const commentData = [
   {
      comment_text: "Comment text for user_id 1, post_id 1. Lorem ipsum dolor sit amet",
      user_id: 1,
      post_id: 1
   },
   {
      comment_text: "Comment text for user_id 1, post_id 2. consectetur adipiscing elit",
      user_id: 1,
      post_id: 2
   },
   {
      comment_text: "Comment text for user_id 1, post_id 3. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      user_id: 1,
      post_id: 3
   },
   {
      comment_text: "Comment text for user_id 2, post_id 1. Lorem ipsum dolor sit amet",
      user_id: 2,
      post_id: 1
   },
   {
      comment_text: "Comment text for user_id 2, post_id 2. consectetur adipiscing elit",
      user_id: 2,
      post_id: 2
   },
   {
      comment_text: "Comment text for user_id 2, post_id 3. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      user_id: 2,
      post_id: 3
   },
   {
      comment_text: "Comment text for user_id 2, post_id 4. Lorem ipsum dolor sit amet",
      user_id: 2,
      post_id: 4
   },
   {
      comment_text: "Comment text for user_id 2, post_id 5. consectetur adipiscing elit",
      user_id: 2,
      post_id: 5
   },
   {
      comment_text: "Comment text for user_id 3, post_id 1. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      user_id: 3,
      post_id: 1
   },
   {
      comment_text: "Comment text for user_id 3, post_id 2. Lorem ipsum dolor sit amet",
      user_id: 3,
      post_id: 2
   },
   {
      comment_text: "Comment text for user_id 4, post_id 1. consectetur adipiscing elit",
      user_id: 4,
      post_id: 1
   },
   {
      comment_text: "Comment text for user_id 5, post_id 1. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      user_id: 5,
      post_id: 1
   },
   {
      comment_text: "Comment text for user_id 5, post_id 2. Lorem ipsum dolor sit amet",
      user_id: 5,
      post_id: 2
   },
   {
      comment_text: "Comment text for user_id 5, post_id 3. consectetur adipiscing elit",
      user_id: 5,
      post_id: 3
   },
   {
      comment_text: "Comment text for user_id 5, post_id 4. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      user_id: 5,
      post_id: 4
   }
];


const seedComments = () => Comment.bulkCreate( commentData );


module.exports = seedComments;