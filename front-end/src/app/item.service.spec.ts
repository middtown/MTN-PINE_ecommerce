import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  it('should return items', inject([ItemService], (service: ItemService) => {
    console.log(service.getItems());
    expect(service.getItems()).toBeTruthy();
  }));
});
