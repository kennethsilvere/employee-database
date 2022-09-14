import { TestBed } from '@angular/core/testing';

import { AvailableResourcesService } from './available-resources.service';

describe('AvailableResourcesService', () => {
  let service: AvailableResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
