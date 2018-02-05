import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

	baseUrl = 'http://localhost:3000';
	 
	newUser = <any>{};

	onNewUser(user) {
		console.log(user);
		return this.http.post(`${this.baseUrl}/api/profile/new`, user);
	}

  constructor(private router :Router, private http :Http) { }

  ngOnInit() {
  }

}
