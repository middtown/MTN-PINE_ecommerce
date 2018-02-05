import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	baseUrl = 'http://localhost:3000';

	// submitted = false;
	// onSubmit() {
	// 	this.submitted = true;
	// }
	 
	newUser = <any>{};

	

	onNewUser(user) {
		console.log(user);
		return this.http.post(`${this.baseUrl}/api/profile/new`, user);
	}

  constructor(private router :Router, private http :Http) { }

  ngOnInit() {
  }

}
