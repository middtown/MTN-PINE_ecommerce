import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from './items/item';

@Injectable()
export class CartService {

	cart :Item[];

	getCart() {
		if(!this.cart) { this.cart = [] }
		return of(this.cart);
	}

	addToCart(item) {
		if(this.cart) { this.cart.push(item) }
		else { this.cart = [item] }
		console.log(this.cart);
	}

	removeFromCart(id) {
		this.cart.splice(id, 1);
		return of(this.cart);
	}

  constructor() { }

}
