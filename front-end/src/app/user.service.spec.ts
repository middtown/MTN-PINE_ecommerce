import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a baseUrl', inject([UserService], (service: UserService) => {
    expect(service.baseUrl).toBeTruthy();
  }));
});