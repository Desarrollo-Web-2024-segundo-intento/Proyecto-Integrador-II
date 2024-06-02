/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistroService } from './registro.service';

describe('Service: Registro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroService]
    });
  });

  it('should ...', inject([RegistroService], (service: RegistroService) => {
    expect(service).toBeTruthy();
  }));
});
