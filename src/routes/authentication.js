const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedId } = require('../lib/auth');
const { route } = require('.');
router.get('/signup',isNotLoggedId, (req,res) => {
    res.render('auth/signup');
});

router.post('/signup',isNotLoggedId, passport.authenticate('local.signup',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin',isNotLoggedId, (req,res) => {
    res.render('auth/signin');
});

router.post('/signin',isNotLoggedId, (req,res,next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});
router.get('/profile', isLoggedIn, (req,res) => {
    res.render('profile');
});

router.get('/logout',isLoggedIn, (req,res) => {
    req.logOut();
    res.redirect('/signin');
});
module.exports = router;