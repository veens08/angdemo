import { TestBed } from '@angular/core/testing';

import { FrameworkDaoService } from './framework-dao.service';

describe('FrameworkDaoService', () => {
  let service: FrameworkDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworkDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
