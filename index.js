const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// runs the code in the passport file
require('./models/User');
require('./services/passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

// setup configuration to listen for requests
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Attach the route handlers to the app object
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
