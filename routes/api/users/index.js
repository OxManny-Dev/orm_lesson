const {
  createUser,
  seed_db,
} = require("../../../controllers/userController");
const router = require('express').Router();

// /api/users
// req.body will never exist in a get request
router.post('/', createUser);
router.post('/seed_db', seed_db);
router.post('/seed_dbs', seed_db);


module.exports = router;