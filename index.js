const express = require('express');
const authRoutes = require('./routes/authRoutes');

// runs the code in the passport file
require('./services/passport');

// setup configuration to listen for requests
const app = express();

// Attach the route handlers to the app object
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(5000);
