import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CartService {

	cart :number[];

	addToCart(id) {
		this.cart.push(1);
		console.log(this.cart);
	}

  constructor() { }

}
