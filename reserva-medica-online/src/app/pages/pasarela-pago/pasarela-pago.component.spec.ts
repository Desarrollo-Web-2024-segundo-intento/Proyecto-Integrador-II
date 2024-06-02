import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarelaPagosComponent } from './pasarela-pago.component';

describe('PasarelaPagoComponent', () => {
  let component: PasarelaPagosComponent;
  let fixture: ComponentFixture<PasarelaPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasarelaPagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasarelaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
