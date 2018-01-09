const passport = require('passport');

module.exports = app => {
  // When request comes in, hand it to passport
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
