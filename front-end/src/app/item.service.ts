import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from './items/item';
import { ITEMS } from './items/mock-items';

@Injectable()
export class ItemService {

	getItems() :Observable<Item[]> {
		return of(ITEMS);
	}

  constructor() { }

}
