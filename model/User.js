const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Create a class that inherits all the prototype methods of the "Model" class
// from Sequelize
class User extends Model {}



// Create a table using Sequelize
User.init(
  // Define columns on model
  {
    // by default Sequelize creates an ID column for us that auto-increments
  //   and sets it as the primary key
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    // Define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // no duplicates allowed
    },
    // Define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // no duplicates allowed
      validate: {
        isEmail: true, // must be an email  // this just ensures that the email field is the correct format
      },
    },
    powerLevel: {
      type: DataTypes.INTEGER,
    },
    isCool: {
      type: DataTypes.BOOLEAN,
    }
  },
  // Link to database connection and configuration settings for how
  // to create this table
  {
    // tell sequelize which database we want to create this table for
    sequelize,
    timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
    modelName: 'users', // we override what sequelize will name it by default, which is the plural of the name of the model
  }
);

module.exports = User;
/*
*
*
* user sends us credentials
* send them a JWT token that contains the account info to the user as an email
* if they click on the "link" in the email, we take them to a url that looks like this
* www.myApp.com/verify?token=gdas6s89dya7das6yda87
* we have a listener on our server that looks like this app.get('/verify', (req, res) => { })
* we take the token from the url and verify it
* if token is verified we create the user in the database
* */