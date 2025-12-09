const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.render('applications/index.ejs');
  } catch (err) {
    res.redirect('/');
  }
});

// Create
router.get('/new', async (req, res) => {
  try {
    res.render('applications/new.ejs');
  } catch (error) {
    res.redirect('/');
  }
});

router.post('/', async (req, res) => {
  try {
    // first find the current user
    const current_user = User.findById();
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
  // create the application payload
  // push the new application to the user.applications
  // await user.save()
  // redirect to apps index
});

module.exports = router;
