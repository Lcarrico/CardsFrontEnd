import { TestBed } from '@angular/core/testing';

import { StackLinkService } from './stack-link.service';

describe('StackLinkService', () => {
  let service: StackLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
