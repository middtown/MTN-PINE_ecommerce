import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemsComponent } from './items.component';

import { ItemService } from '../item.service';
import { CartService } from '../cart.service';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent, ItemDetailComponent ],
      imports: [ HttpModule ],
      providers: [ ItemService, CartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

/***************/
/* BEGIN TESTS */
/***************/

// onSelect()
  describe('onSelect()', ()=> {
    it('should load without a selected item', ()=> {
      expect(component.selectedItem).toBeFalsy();
    });

    it('should be able to select the first item', ()=> {
      component.onSelect(0);
      expect(component.selectedItem).toBe(0);
    });

    it('should be able to select a random item', ()=> {
      let num = Math.floor(Math.random() * 6);
      component.onSelect(num);
      expect(component.selectedItem).toBe(num);
    });
  });
});