import { TestBed } from '@angular/core/testing';

import { TopHeadlinesService } from './top-headlines.service';

describe('TopHeadlinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopHeadlinesService = TestBed.get(TopHeadlinesService);
    expect(service).toBeTruthy();
  });
});
