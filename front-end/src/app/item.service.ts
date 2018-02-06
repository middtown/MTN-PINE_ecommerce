import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpModule, Http } from '@angular/http';

import { Item } from './items/item';
import { ITEMS } from './items/mock-items';

@Injectable()
export class ItemService {

	baseUrl = 'http://localhost:3000';
	// baseUrl = 'https://mtnpine.herokuapp.com';

	getItems() {
		return (this.http.get(`${this.baseUrl}/api/items`));
	}

  constructor(private http :Http) { }

}
