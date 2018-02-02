import { Component, OnInit } from '@angular/core';
import { CARTCOUNT } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  	// console.log(this.cartCount);
  }

}
