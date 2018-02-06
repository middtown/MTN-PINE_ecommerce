import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';

import { HomeComponent } from './home.component';

import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from '../user.service';

import { HttpModule } from '@angular/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent, 
        SignUpComponent,
        LogInComponent
      ],
      imports: [ FormsModule, RouterTestingModule ,HttpModule ],
      providers: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});