import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPagosComponent } from './estado-pagos.component';

describe('EstadoPagosComponent', () => {
  let component: EstadoPagosComponent;
  let fixture: ComponentFixture<EstadoPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
