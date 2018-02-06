import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	currentUser = {};

  constructor(private userService :UserService) { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    this.userService.getUser()
    .subscribe((res)=> {
      console.log(res.json());
      this.currentUser = res.json();
      this.userService.currentUser = res.json();
    });
  }

}
