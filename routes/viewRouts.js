const express = require('express');
const viewsController = require('../controllers/viewController');
const authController = require('../controllers/authController');
const router = express.Router();

// router.use(authController.isLonggedIn);
// router.use(authController.isLoggedIn);
// router.get('/favicon.ico', (req, res) => res.status(204).end());


router.get('/',authController.isLoggedIn,viewsController.getOverView);
router.get('/predictions',viewsController.getPredcitonsDoc);
router.post('/predict',viewsController.getPredcitons);
router.get('/signup',viewsController.getSingup)
router.get('/prediction',viewsController.getPredcitonsForm);

router.get('/medicat',viewsController.getMedicat);
router.get('/tour/:slug',authController.protect,authController.isLoggedIn,viewsController.getTour);
router.get('/login',authController.isLoggedIn,viewsController.getLoginForm);
router.get('/me',authController.protect,viewsController.getAccont);

module.exports = router;