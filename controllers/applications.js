const express = require('express');
const { redirect } = require('react-router-dom');
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
    const currentUser = await User.findById(req.session.user._id);

    console.log(currentUser);
    // create the application payload
    // push the new application to the user.applications
    currentUser.applications.push(req.body);
    // await user.save()
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/applications`);
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
  // redirect to apps index
});

module.exports = router;
