import { TestBed, inject } from '@angular/core/testing';

import { CartComponent } from './cart/cart.component';

import { CartService } from './cart.service';

// import { Item } from './items/item';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('should load an empty cart', inject([CartService], (service: CartService) => {
    expect(service.cart).toBeFalsy();
  }));

  describe('addToCart()', ()=> {
  	it('should add an item to the cart arry', inject([CartService], (service: CartService) => {
  		service.addToCart(
        {id: 1, name: 'Loch Vale Bi-Fold Wallet', category: 'Wallet', description: 'Made for the individual who prefers a classic bi-fold, the Loch Vale is perfect for carrying both cards and cash.', price: '65', color: 'brown', dimensions: '3" x 6" folded', weight: '24oz', createdAt: '2018-02-05T19:43:34.793Z', updatedAt: '2018-02-05T19:43:34.793Z'}
      );
  	  expect(service.cart).toBeTruthy();
  	}));

  	it('should create an array with length 2 after being called twice', inject([CartService], (service: CartService) => {
  		service.addToCart({id: 1, name: 'Loch Vale Bi-Fold Wallet', category: 'Wallet', description: 'Made for the individual who prefers a classic bi-fold, the Loch Vale is perfect for carrying both cards and cash.', price: '65', color: 'brown', dimensions: '3" x 6" folded', weight: '24oz', createdAt: '2018-02-05T19:43:34.793Z', updatedAt: '2018-02-05T19:43:34.793Z'}
);
  		service.addToCart({id: 1, name: 'Loch Vale Bi-Fold Wallet', category: 'Wallet', description: 'Made for the individual who prefers a classic bi-fold, the Loch Vale is perfect for carrying both cards and cash.', price: '65', color: 'brown', dimensions: '3" x 6" folded', weight: '24oz', createdAt: '2018-02-05T19:43:34.793Z', updatedAt: '2018-02-05T19:43:34.793Z'}
);
  	  expect(service.cart.length).toEqual(2);
  	}));
  });
});
