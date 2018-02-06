import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';
import { Item } from '../items/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	items :Item[];

	cart = <any>[];

  constructor(
  	private cartService :CartService,
  	private itemService :ItemService
 	) { }

  ngOnInit() {
  	this.cartService.getCart()
  	.subscribe((res)=> {
  		console.log(res);
  		this.cart = res;
  	});

  	this.itemService.getItems()
  	.subscribe((res)=> {
  	  console.log(res.json());
  	  this.items = res.json()
  	});
  }

}
