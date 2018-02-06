import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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
		return of(user);
	}

	getUser() {
		console.log('getUser()');
		return this.http.get(`${this.baseUrl}/api/profile`);
	}

  constructor(private http :Http) { }

}