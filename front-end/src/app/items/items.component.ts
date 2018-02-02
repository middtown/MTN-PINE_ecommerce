import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { CARTCOUNT } from '../cart';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

	items = ITEMS;

	addToCart(id) {
		console.log(id);
	}

  constructor() { }

  ngOnInit() {
  }

}
