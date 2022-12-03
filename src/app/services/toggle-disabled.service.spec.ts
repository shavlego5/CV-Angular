import { TestBed } from '@angular/core/testing';

import { ToggleDisabledService } from './toggle-disabled.service';

describe('ToggleDisabledService', () => {
  let service: ToggleDisabledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleDisabledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
