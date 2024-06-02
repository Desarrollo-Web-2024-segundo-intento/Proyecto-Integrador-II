import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTurnosComponent } from './mis-turnos.component';

describe('MisTurnosComponent', () => {
  let component: MisTurnosComponent;
  let fixture: ComponentFixture<MisTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisTurnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
