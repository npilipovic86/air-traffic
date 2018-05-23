import { TestBed, inject } from '@angular/core/testing';

import { AirService } from './air.service';

describe('AirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirService]
    });
  });

  it('should be created', inject([AirService], (service: AirService) => {
    expect(service).toBeTruthy();
  }));
});
