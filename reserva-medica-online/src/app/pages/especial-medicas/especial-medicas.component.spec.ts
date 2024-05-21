import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialMedicasComponent } from './especial-medicas.component';

describe('EspecialMedicasComponent', () => {
  let component: EspecialMedicasComponent;
  let fixture: ComponentFixture<EspecialMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialMedicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecialMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
