import { TestBed } from '@angular/core/testing';

import { TagLinkService } from './tag-link.service';

describe('TagLinkService', () => {
  let service: TagLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
