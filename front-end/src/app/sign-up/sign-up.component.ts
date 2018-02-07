import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

	newUser = <any>{};

	onNewUser(newUser) {
		if(newUser.name && newUser.email && newUser.password && (newUser.password == newUser.verifyPassword)) {
			this.userService.saveUser(newUser)
			.subscribe((response)=> {
				let user = response;
				console.log('newUser');
				console.log(user);
				this.userService.currentUser = user;
				$('#modalSignup').modal('hide');
				this.router.navigate(["/items"]);
			});
		} else {
			newUser.name = "Please enter all correct info.";
		}
	}

  constructor(
  	private router :Router, 
  	private userService :UserService
  ) { }

  ngOnInit() {
  }

}