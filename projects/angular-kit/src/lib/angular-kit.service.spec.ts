import { TestBed } from '@angular/core/testing';

import { AngularKitService } from './angular-kit.service';

describe('AngularKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularKitService = TestBed.get(AngularKitService);
    expect(service).toBeTruthy();
  });
});
