const Sequelize = require('sequelize');
const db = require('../models'); //grabbing db from models folder for router controll
const Item = db.models.Item; //specifies what exaclty the model needed
const User = db.models.User;
const Address = db.models.Address;
const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should() //actually call the function
const server = require('../server');

// Connection to heroku and local comp for three people.
const localHost = require("../env.js") || process.env.AARONSLOCALMACHINE || process.env.JOSHUASLOCALMACHINE || process.env.RICKYSLOCALMACHINE;
let sequelize = new Sequelize(process.env.DATABASE_URL || localHost.aaron || localHost.josh || localHost.ricky );


describe('#createUser()', () => {
	
	it('should GET all the items', (done) => {
    	Item.findAll().then(items => {
		items.body.should.be.a('object');
        done();
        });
  	});
	
	it('should save without error', done => {
		User.create({			
			name: 'Jimmy Hendricks',
			email:'JimmyHendricks@gmail.com',
			password: 'JimmyIsAwesom206!'
			}).then( newUser => {
			expect(newUser.name).to.equal('Jimmy Hendricks');
			console.log(newUser);
			done();
		});
	});

	it('should create address without error', done => {
		Address.create({ 
			nickname: 'The Chi',
		    street: '312 Greatest City 1st ST.',
		    apt: 'G1',
		    country: 'United States of America',
		    state: 'IL',
		    postalCode: 60007 
			}).then(newAddress => {
				expect(newAddress.nickname).to.equal('The Chi');
				console.log(newAddress);
				done();
		});
	});
});

 
					
