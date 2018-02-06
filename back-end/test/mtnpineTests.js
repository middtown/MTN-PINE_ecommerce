const Sequelize = require('sequelize');
const db = require('../models'); //grabbing db from models folder for router controll
const Item = db.models.Item; //specifies what exaclty the model needed
const User = db.models.User;
const expect = require('chai').expect;
const assert = require('chai').assert;
// Connection to heroku and local comp for three people.
const localHost = require("../env.js") || process.env.AARONSLOCALMACHINE || process.env.JOSHUASLOCALMACHINE || process.env.RICKYSLOCALMACHINE;
let sequelize = new Sequelize(process.env.DATABASE_URL || localHost.aaron || localHost.josh || localHost.ricky );


describe('#createUser()', () => {

    it('should save without error', done => {
        User.create({     
          name: 'Hendricks',
          email:'someemail@gmail.com',
          password: 'somepassword'
        }).then( newUser => {
          expect(newUser.name).to.equal('Hendricks');
          console.log(newUser);
          done();
        });
    });

});
          
