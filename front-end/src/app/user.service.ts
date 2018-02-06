import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class UserService {

	baseUrl = 'http://localhost:3000';
	// baseUrl = 'http://mtnpine.herokuapp.com';

	currentUser = {};
	
	saveUser(newUser) {
		console.log("from services"); 
		console.log(newUser);
		return this.http.post(`${this.baseUrl}/api/profile/new`, newUser);
	}

	logInUser(user) {
		console.log(`Log in:`);
		console.log(user);
		// validate?
		this.currentUser = user;
	}

	getUser() {
		console.log('getUser()');
		return this.http.get(`${this.baseUrl}/api/profile`);
	}

  constructor(private http :Http) { }

}