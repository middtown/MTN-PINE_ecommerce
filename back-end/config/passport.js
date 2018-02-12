const bCrypt = require('bcrypt-nodejs');
const passport = require('passport');
const flash = require('flash');
const LocalStrategy   = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport, user) => {
    console.log("right inside of function");
    let User = user;
    let LocalStrategy = require('passport-local').Strategy;
    
    passport.serializeUser((user, done) => {
        console.log("user id");
        console.log(user.id);
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log("just id");
        console.log(id);
        User.findById(id).then((err, user) => {
            done(err, user);
            if (user) {
                console.log("get function");
                console.log(user.get());
                done(null, user.get());
            } else {
                console.log("errors");
                console.log(user.errors);
                done(user.errors,null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy(
        {
            name: 'name',
            email: 'email',
            password: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
     
        }, (req, email, password, done) => {
                    console.log("passport dot use");
                    console.log(email);
                    console.log(password);

                let generateHash = (password) => {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

            User.findOne({
                where: { email: email }}).then((user) => {
                    if (user)
                    {
                    return done(null, false, { message: 'That email is already taken' });                
                    } else {
                        let userPassword = generateHash(password);
             
                        let data =
             
                        {
                            name: req.body.name,
                            email: email,
                            password: userPassword,
                        };

                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
    }));
};





















//  module.exports = function(passport) {

//   passport.serializeUser(function(user, callback) {
//     callback(null, user.id);
//   });

//   passport.deserializeUser(function(id, callback) {
//     User.findById(id, function(err, user) {
//         callback(err, user);
//     });
//   });
//   passport.use('local-signup', new LocalStrategy({
//      usernameField : 'email',
//      passwordField : 'password',
//      passReqToCallback : true
//   }, function(req, email, password, callback) {
//       console.log(req.body);
//       console.log(email + password);

//         let generateHash = (password) => {
//             return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//         // Find a user with this e-mail
//         User.findOne({ 'local.email' :  email }, function(err, user) {
//           if (err) return callback(err);

//           // If there already is a user with this email
//           if (user) {
//                     return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
//           } else {
//           // There is no user registered with this email
//                     // Create a new user
//                     User.crete(function(err) {
//                       var newUser            = new User();
//                     newUser.local.email    = email;
//                     newUser.local.password = newUser.generateHash(password);

//                     });            
//           }
//         });
//         };
//   }));

//   passport.use('local-login', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   }, function(req, email, password, callback) {
//     // Search for a user with this email
//     User.findOne({ 'local.email' :  email }, function(err, user) {
//       if (err) {
//         return callback(err);
//       }

//       // If no user is found
//       if (!user) {
//         return callback(null, false, req.flash('loginMessage', 'No user found.'));
//       }
//       // Wrong password
//       if (!user.validPassword(password)) {
//         return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//       }

//       return callback(null, user);
//     });
//   }));
// };














//  module.exports = function(passport, user) {

//   passport.serializeUser(function(user, callback) {
//     callback(null, user.id);
//   });

//   passport.deserializeUser(function(id, callback) {
//     User.findById(id, function(err, user) {
//         callback(err, user);
//     });
//   });


//   passport.use('local-signup', new LocalStrategy({
//      usernameField : 'email',
//      passwordField : 'password',
//      passReqToCallback : true
//   }, function(req, email, password, callback) {
//     // Find a user with this e-mail
//     User.findOne({ 'local.email' :  email }, function(err, user) {
//       if (err) return callback(err);

//       // If there already is a user with this email
//       if (user) {
//                 return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
//       } else {
//       // There is no user registered with this email
//                 // Create a new user
//                 var newUser            = new User();
//                 newUser.local.email    = email;
//                 newUser.local.password = newUser.encrypt(password);

//                 newUser.save(function(err) {
//                   if (err) throw err;
//                   return callback(null, newUser);
//                 });
//       }
//     });
//   }));

//   passport.use('local-login', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   }, function(req, email, password, callback) {
//     // Search for a user with this email
//     User.findOne({ 'local.email' :  email }, function(err, user) {
//       if (err) {
//         return callback(err);
//       }

//       // If no user is found
//       if (!user) {
//         return callback(null, false, req.flash('loginMessage', 'No user found.'));
//       }
//       // Wrong password
//       if (!user.validPassword(password)) {
//         return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//       }

//       return callback(null, user);
//     });
//   }));
// };































// // load all the things we need
// const LocalStrategy    = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// // load up the user model
// const User = require('../app/models/user');

// // load the auth variables
// const configAuth = require('./auth');

// // used to serialize user for the session
// passport.serializeUser((user, done) => {
// 	done(null, user.id);
// });

// // used to deserialze the user
// passport.deserializeuser((id, done) => {
// 	User.findById(id, (err, user) => {
// 		done(err, user);
// 	});
// });

// // code for login (use('local-login', new LocalStategy))
// // code for signup (use('local-signup', new LocalStategy))
// // code for facebook (use('facebook', new FacebookStrategy))
// // code for twitter (use('twitter', new TwitterStrategy))

// // =========================================================================
// // GOOGLE ==================================================================
// // =========================================================================

// passport.use(new GoogleStrategy({

// 	clientID 		: configAuth.googleAuth.clientID,
// 	clientSecret 	: configAuth.googleAuth.clientSecret,
// 	callbackURL 	: configAuth.googleAuth.callbackURL,
// 	},(token, refreshToken, profile, done) => {
// 		// make the code asynchronous
//         // User.findOne won't fire until we have all our data back from Google
//         process.nextTick(() => {
//         	// try to find user based on google id
//         	User.findOne({'google.id' : profile.id }, (err, user) => {
//         		if(err)
//         			return done(err);
//         		if(user) {
//         			//if there is a user, log person in
//         			return done(null, user);
//         		} else {
//         			//if no user in database, create a new user
//         			let newUser = new User();

//         				//set all info and place in database
//         				// set all of the relevant information
//                     newUser.google.id    = profile.id;
//                     newUser.google.token = token;
//                     newUser.google.name  = profile.displayName;
//                     newUser.google.email = profile.emails[0].value; // pull the first email

//                     // save the user
//                     newUser.save(err => {
//                     	if (err)
//                     		throw err;
//                     	return done(null, newUser);
//                     })
//         		}
//         	})
//         })
//     }
// ))

