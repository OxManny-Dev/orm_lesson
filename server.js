const express = require('express');
const app = express();
const PORT = 3001;
const routes = require('./routes');

const sequelize = require('./config/connection');



// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// forward all request with a pattern of "/" to router in routes folder
app.use(routes);


// with force true, it always drops the database
// before it connects to the server
sequelize.sync({force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
