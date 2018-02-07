import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../items/item';
import * as $ from 'jquery';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

	cart :Item[];

	constructor(
	 	private cartService :CartService
	) { }

  ngOnInit() {
		this.cartService.getCart()
		.subscribe((res)=> {
	    console.log('cart.component.ngOnInit');
			console.log(res);
			$('#modalCart').modal('hide');
			this.cart = res;
		});
  }

}
