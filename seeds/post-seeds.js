const { Post } = require('../models');


const postData = [
   {
      title: 'JavaScript Loading Priorities in Chrome',
      content: 'Loading priorities are not guaranteed to be consistent cross-browser so use this knowledge wisely and measure when unsure. Ideally, aim to delivery a great experience to the widest number of users possible.',
      user_id: 1

   },
   {
      title: 'The Cost Of JavaScript',
      content: 'As we build sites more heavily reliant on JavaScript, we sometimes pay for what we send down in ways that we can’t always easily see. In this post, I’ll cover why a little discipline can help if you’d like your site to load & be interactive quickly on mobile devices.',
      user_id: 2
   },
   {
      title: 'Building a RESTful API with Node, Flow, and Jest',
      content: 'It’s plug-n-play with Babel, so adding Flow to a project using Babel would probably be much less painful than converting it to use TypeScript. Both allow you to do so bit by bit, but Flow handles this more gracefully. TypeScript would usually like to just have you pass everything through the compiler and deal with the type errors as you can. Flow allows you to annotate only the files you want to type check, so adding it to an existing project is much easier. Actually, this is probably the best use case for Flow. It would be cumbersome to start a brand new project with such strict type checking. It definitely slows down the rapid iteration needed at the beginning of a project’s life. However, once the project gets to a certain size it’s easy to drop in Flow and clean up the errors file by file as you move forward.',
      user_id: 3
   },
   {
      title: 'Flask for Node Developers',
      content: 'Today we’ll be going through how to build a basic CRUD server-side application using Python and Flask, geared toward JavaScript developers versed in Node and Express. Similar to Express, Flask is a simple, yet powerful micro-framework for Python, perfect for RESTful APIs.',
      user_id: 4

   },
   {
      title: 'Testing Node and Express',
      content: 'Are you currently manually testing your app? When you push new code do you manually test all features in your app to ensure the new code doesn’t break existing functionality? How about when you’re fixing a bug? Do you manually test your app? How many times - ten, twenty, thirty times? Stop wasting time! If you do any sort of manual testing write an automated test instead. Your future self will thank you. Need more convincing? Testing. Helps break down problems into manageable pieces. Forces you to write cleaner code. Prevents over coding. Let’s you sleep at night (because you actually know that your code works)',
      user_id: 5
   },
   {
      title: 'Web Scraping with Regular Expressions',
      content: 'You need to extract and parse all the headers and links from a web site or an XML feed, and then dump the data into a CSV file.',
      user_id: 6
   },
   {
      title: 'The Modern Web',
      content: 'Reddit co-founder Alexis Ohanian, poking at the Parler mess: Every few years, there’s some quote-unquote free-speech platform that gets founded in response to changes or policy changes that have been made. But the thing that all these platforms ultimately realize is that you hit a ceiling because people actually do want moderation ',
      user_id: 4
   },
   {
      title: 'React useReducer with Middleware',
      content: "In this React Hooks tutorial, I want to show you how to use a middleware for React's useReducer Hook. This middleware would run either before or after the state transition of the reducer and enables you to opt-in features." ,
      user_id: 5
   }
];


const seedPosts = () => Post.bulkCreate( postData );


module.exports = seedPosts;