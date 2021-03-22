const router = require( 'express' ).Router();
const homeRoutes = require( './home-routes' )
const dashboardRoutes = require( './dashboard-routes.js' );
const apiRoutes = require( './api' );


// Connect api and front end routes
router.use( '/api', apiRoutes );
router.use( '/', homeRoutes );
router.use( '/dashboard', dashboardRoutes );


// Send a 404 error if user goes to undefined route
router.use(( req, res ) => {
  res.status( 404 ).end();
});


module.exports = router;