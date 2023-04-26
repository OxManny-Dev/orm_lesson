const router = require('express').Router();
// we are getting an object that we
// can build API's on
const apiRoutes = require('./api');

router.use('/api', apiRoutes);



module.exports = router;