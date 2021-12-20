import { TestBed } from '@angular/core/testing';

import { RestApiDataService } from './rest-api-data.service';

describe('RestApiDataService', () => {
  let service: RestApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
