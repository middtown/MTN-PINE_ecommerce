import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

	currentUser = <any>{};

	onLogIn(currentUser) {
		this.userService.logInUser(currentUser)
		.subscribe((res)=> {
			this.currentUser = res;
			this.userService.currentUser = currentUser;
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
