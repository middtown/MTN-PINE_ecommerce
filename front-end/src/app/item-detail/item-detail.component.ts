import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items/item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

	@Input() item :Item;


	addToCart(id) {
		console.log(id);
		this.cartService.addToCart(id);
	}

  constructor(private cartService :CartService) { }

  ngOnInit() {
  }

}
