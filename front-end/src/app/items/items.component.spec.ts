import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemsComponent } from './items.component';
import { ItemService } from '../item.service';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent, ItemDetailComponent ],
      providers: [ ItemService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
