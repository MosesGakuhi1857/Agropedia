import { TestBed } from '@angular/core/testing';

import { AgroService } from './agro.service';

describe('AgroService', () => {
  let service: AgroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
