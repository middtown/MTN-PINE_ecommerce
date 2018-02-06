 import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class UserService {

	baseUrl = 'http://localhost:3000';
	//baseUrl = 'http://localhost:4200';
	//baseUrl = 'http://mtnpine.herokuapp.com';

	saveUser(newUser) {
		return this.http.post(`${this.baseUrl}/api/profile/new`, newUser);
	}

  constructor(private http :Http) { }

}