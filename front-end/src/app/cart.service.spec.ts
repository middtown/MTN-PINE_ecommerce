import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('should load an empty cart', inject([CartService], (service: CartService) => {
    expect(service.cart).toEqual([]);
  }));

  describe('addToCart()', ()=> {
  	it('should add an item to the cart arry', inject([CartService], (service: CartService) => {
  		service.addToCart(1);
  	  expect(service.cart).toBeTruthy();
  	}));

  	it('should create an array with length 2 after being called twice', inject([CartService], (service: CartService) => {
  		service.addToCart(1);
  		service.addToCart(2);
  	  expect(service.cart).toEqual([1, 2]);
  	}));
  });
});
