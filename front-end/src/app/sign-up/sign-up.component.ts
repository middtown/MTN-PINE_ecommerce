import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

	baseUrl = 'http://localhost:3000';
	 
	newUser = <any>{};

	onNewUser(newUser) {
		console.log(newUser);
		this.userService.saveUser(newUser)
		.subscribe((response)=> {
			let user = response.json();
			console.log(user);
			// TODO - change navigate location, display login success using either:
				// - home page with currentUser displayed, login/signup hidden
				// - go to items or profile page with success flash message
			this.router.navigate(["/items"]);
		});
	}

  constructor(
  	private router :Router, 
  	private userService :UserService
  ) { }

  ngOnInit() {
  }

}
