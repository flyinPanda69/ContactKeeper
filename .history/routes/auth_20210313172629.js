const express = require('express');
const router = express.Router();

//@route  Get api/users
//@desc   Register a user
//@access Private
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
