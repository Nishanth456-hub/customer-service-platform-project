const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: YOUR_GOOGLE_CLIENT_ID,
  clientSecret: YOUR_GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback', 
},
(accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
