// loading needed strategies

const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-google-oauth');

// loading our user model
const User = require('../models/user.js');

// loading auth variables