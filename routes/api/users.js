// require modules
// set up router object
const router = require('express').Router();
// require the controller
const usersCtrl = require('../../controllers/users');


// define a signup route
router.post('/signup', usersCtrl.signup);


// export the router
module.exports = router;