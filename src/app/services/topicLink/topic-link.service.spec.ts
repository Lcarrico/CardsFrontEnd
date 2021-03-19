import { TestBed } from '@angular/core/testing';

import { TopicLinkService } from './topic-link.service';

describe('TopicLinkService', () => {
  let service: TopicLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
