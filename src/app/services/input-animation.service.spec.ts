import { TestBed } from '@angular/core/testing';

import { InputAnimationService } from './input-animation.service';

describe('InputAnimationService', () => {
  let service: InputAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
