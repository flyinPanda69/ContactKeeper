const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all user contacts
//@access Private
router.Get('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
