import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	cartCount :number = 1;

  constructor() { }

  ngOnInit() {
  	console.log(this.cartCount);
  }

}
