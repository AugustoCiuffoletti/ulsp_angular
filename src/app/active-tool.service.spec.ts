import { TestBed } from '@angular/core/testing';

import { ActiveToolService } from './active-tool.service';

describe('ActiveToolService', () => {
  let service: ActiveToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
