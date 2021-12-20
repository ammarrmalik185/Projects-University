import { TestBed } from '@angular/core/testing';

import { GenshinHelperApiService } from './genshin-helper-api.service';

describe('GenshinHelperApiService', () => {
  let service: GenshinHelperApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinHelperApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
