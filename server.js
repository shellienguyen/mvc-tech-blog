// Import dependencies
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
   secret: 'super random secret',
   cookie: { maxAge: 36000 },
   resave: false,
   saveUninitialized: true,
   store: new sequelizeStore({
      db: sequelize
   })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set( 'view engine', 'handlebars');

app.use(routes);


sequelize.sync({ force: true }).then(() => {
   app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});