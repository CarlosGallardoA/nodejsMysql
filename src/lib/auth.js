module.exports = {
    isLoggedIn(req,res,next) {
        if(req.isAuthenticated()) {
            return next();
        }else{
            return res.redirect('/signin');
        }
    },
    isNotLoggedId(req,res,next) {
        if(!req.isAuthenticated()) {
            return next();
        }else{
            return res.redirect('/profile');
        }
    }
};