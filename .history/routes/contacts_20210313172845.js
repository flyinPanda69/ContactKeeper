const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all user contacts
//@access Private
router.Get('/', (req, res) => {
  res.send('Get all contacts');
});


//@route  POST api/contacts
//@desc   Add all user contacts
//@access Private
router.Get('/', (req, res) => {
    res.send('Get all contacts');
  });




module.exports = router;
