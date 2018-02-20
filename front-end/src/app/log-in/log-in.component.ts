import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
// import * as $ from 'jquery';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

	currentUser = <any>{};

	thisUser = <any>{};

	onLogIn(thisUser) {
		if(thisUser.email && thisUser.password) {
			this.userService.logInUser(thisUser)
			.subscribe((res)=> {
				this.currentUser = res;
				// technically works on ng serve, but throws error
				// $('#modalLogin').modal('hide');
				this.router.navigate(["/items"]);
			});
		} else {
			thisUser.email = "Please enter all correct info.";
		}
	}

  constructor(
  	private router :Router, 
		private userService :UserService
	) { }

  ngOnInit() {
  }

}
