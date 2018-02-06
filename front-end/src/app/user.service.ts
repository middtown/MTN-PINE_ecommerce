import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class UserService {

	baseUrl = 'http://localhost:3000';
	// baseUrl = 'http://mtnpine.herokuapp.com';

	saveUser(newUser) {
		console.log("from services"); 
		console.log(newUser);
		return this.http.post(`${this.baseUrl}/api/profile/new`, newUser);
	}

  constructor(private http :Http) { }

}