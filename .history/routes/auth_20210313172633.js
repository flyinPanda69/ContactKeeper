const express = require('express');
const router = express.Router();

//@route  Get api/users
//@desc   const express = require('express');
const router = express.Router();

//@route  POST api/users
//@desc   Register a user
//@access Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;

//@access Private
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
