const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all user contacts
//@access Private
router.Get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route  POST api/contacts
//@desc   Add contact
//@access Private
router.Get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route  GET api/contacts/:id
//@desc   Update contacts
//@access Private
router.Get('/:id', (req, res) => {
  res.send('Update Contact');
});

//@route  DELETE api/contacts/:id
//@desc   Update contacts
//@access Private
router.Get('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
