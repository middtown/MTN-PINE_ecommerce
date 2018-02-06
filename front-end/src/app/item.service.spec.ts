import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  it('should return items after calling', inject([ItemService], (service: ItemService) => {
    expect(service.getItems()).toBeTruthy();
  }));
});