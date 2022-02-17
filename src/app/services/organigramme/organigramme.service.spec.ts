import { TestBed } from '@angular/core/testing';

import { OrganigrammeService } from './organigramme.service';

describe('OrganigrammeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganigrammeService = TestBed.get(OrganigrammeService);
    expect(service).toBeTruthy();
  });
});
