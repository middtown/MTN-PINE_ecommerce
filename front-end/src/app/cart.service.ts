import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CartService {

	cart = <any>[];

	getCart() {
		return of(this.cart);
	}

	addToCart(id) :void{
		this.cart.push(id);
		console.log(this.cart);
	}

  constructor() { }

}
