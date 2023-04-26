const {User} = require('../model');
const {faker} = require('@faker-js/faker');

const createUser = async (req, res) => {
  try {
    // insert a user into the database
    const user = await User.create({
      ...req.body,
      powerLevel: 9001,
      isCool: false,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};


const seed_db = async (req, res) => {
  try {
    const users = await User.bulkCreate([
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        powerLevel: faker.datatype.number({min: 9000}),
        isCool: faker.datatype.boolean(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        powerLevel: faker.datatype.number({min: 9000}),
        isCool: faker.datatype.boolean(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        powerLevel: faker.datatype.number({min: 9000}),
        isCool: faker.datatype.boolean(),
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        powerLevel: faker.datatype.number({min: 9000}),
        isCool: faker.datatype.boolean(),
      },
    ]);

    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createUser,
  seed_db,
}