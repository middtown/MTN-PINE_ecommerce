const DB = require("../models").models;

const itemCreate = () => {
	return DB.Item.bulkCreate([
		{
			name: 'Loch Vale Bi-Fold Wallet',
			category: "Wallet",
			description: 'Made for the individual who prefers a classic bi-fold, the Loch Vale is perfect for carrying both cards and cash.',
			price: 65.00,
			color: 'brown',
			dimensions: '3" x 6" folded',
			weight: '24oz',
			quantity: 5
		}, {
			name: 'Maroon Bells Messenger',
			category: "Bag",
			description: 'The perfect bag whether you are a student or a seasoned professional. The Maroon Bells Messenger is an heirloom quality bag.',
			price: 495.00,
			color: 'brown',
			dimensions: '16" length x 14" height x 4" depth',
			weight: "4lbs."
		}, {
			name: 'Bierstadt Roll Bag',
			category: "Wallet",
			description: 'Perfect travel companion for quick trips along the contryside',
			price: 80.00,
			color: 'brown',
			dimensions: '3" x 3" rolled - 3" x 12" expanded',
			weight: "1lbs."
		}
	]);
};


const userCreate = () => {
	return DB.User.bulkCreate([
		{
			name: 'Aaron Middleton',
			email: "aaron@aaron.com",
			password: 'aaron',
			shippingAddress_id: 1,
			order_id: 1
		}, {
			name: 'Ricky Tranmer',
			email: "ricky@ricky.com",
			password: 'ricky',
			shippingAddress_id: 3,
			order_id: 2
		},{
			name: 'Joshua Hodges',
			email: "joshua@joshua.com",
			password: 'joshua',
			shippingAddress_id: 2,
			order_id: 3
		}
	]);
 };

const addressCreate = () => {
	return DB.Address.bulkCreate([
		{
			nickname: 'new house',
			street: '123 Coder St',
			apt: 'C4',
			country: 'United States of America',
			state: 'Colorado',
			city: 'Denver',
			postalCode: 98126
		}, {
			nickname: 'orange house',
			street: '4556 Pumkin Ave',
			apt: 'a7',
			country: 'United States of America',
			state: 'Seattle',
			city: 'Nevada',
			postalCode: 90210
		}, {
			nickname: 'black house',
			street: '1st st & ash',
			apt: 'K9',
			country: 'Europe',
			state: 'toddle',
			city: 'garmin',
			postalCode: 90328
		}, {
			nickname: 'glass house',
			street: '967 gladwell & malcolm',
			apt: 'b34',
			country: 'United States of America',
			state: 'mississippi',
			city: 'Aurora',
			postalCode: 90012
		}
	]);
 };

const orderCreate = () => {
	return DB.Order.bulkCreate([
		{
			item_id: 3,
			quantity: 2,
			shippingAddress_id: 1
		}, {
			item_id: 1,
			quantity: 1,
			shippingAddress_id: 2
		}, {
			item_id: 2,
			quantity: 4,
			shippingAddress_id: 4
		}
	]);
 };


itemCreate()
	.then(userCreate)
	.then(addressCreate)
	.then(orderCreate)
	.then(function() {
		process.exit();
	})
	.catch(err => {
		console.error("seeding did not work " + err );
	});


// -------------------   impelent the additional data once everything else works. --------------------- //
