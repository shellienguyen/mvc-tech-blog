const { Comment } = require('../models');

const commentData = [
   {
      comment_text: "Performance is a constant process, not a one-time checklist.",
      user_id: 2,
      post_id: 1
   },
   {
      comment_text: "Real-world performance is diverse",
      user_id: 3,
      post_id: 1
   },
   {
      comment_text: "There are no silver bullets to web performance.",
      user_id: 4,
      post_id: 1
   },
   {
      comment_text: "There is download & execution cost",
      user_id: 1,
      post_id: 2
   },
   {
      comment_text: "Less code = less parse/compile + less transfer + less to decompress",
      user_id: 3,
      post_id: 2
   },
   {
      comment_text: "Flow also offers some distinct advantages.",
      user_id: 2,
      post_id: 3
   },
   {
      comment_text: "Working with Flow is interesting, at the very least.",
      user_id: 1,
      post_id: 3
   },
   {
      comment_text: "Flow’s type checking tends to be  strict",
      user_id: 4,
      post_id: 3
   },
   {
      comment_text: "Awesome Topic!",
      user_id: 3,
      post_id: 4
   },
   {
      comment_text: "This testing process is daunting.",
      user_id: 3,
      post_id: 5
   },
   {
      comment_text: "How would this work with passport?",
      user_id: 4,
      post_id: 5
   },
   {
      comment_text: "Do you have any code on github?",
      user_id: 6,
      post_id: 5
   },
   {
      comment_text: "Best to incorporate tests before starting a new project.",
      user_id: 1,
      post_id: 5
   },
   {
      comment_text: "Very interesting and useful. Thanks.",
      user_id: 5,
      post_id: 6
   },
   {
      comment_text: "Can you provide some sample codes?",
      user_id: 4,
      post_id: 6
   },
   {
      comment_text: "Need more discussions.",
      user_id: 3,
      post_id: 7
   },
   {
      comment_text: "That's it. You are now able to run functions prior and after changing the state with React's useReducer Hook by using middleware and afterware.",
      user_id: 1,
      post_id: 8
   },
   {
      comment_text: "Thank you for this post.",
      user_id: 1,
      post_id: 8
   },
   {
      comment_text: "Can you provide some more tutorials on this topic?",
      user_id: 2,
      post_id: 8
   },
   {
      comment_text: "This is very useful.",
      user_id: 3,
      post_id: 8
   }
];


const seedComments = () => Comment.bulkCreate( commentData );


module.exports = seedComments;