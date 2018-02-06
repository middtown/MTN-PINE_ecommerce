import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-devs',
  templateUrl: './about-devs.component.html',
  styleUrls: ['./about-devs.component.scss']
})
export class AboutDevsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scroll({
  	  top: 0,
  	  left: 0,
  	  behavior: 'smooth'
  	});
  }

}
