import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicarSesionComponent } from './iniciar-sesion.component';

describe('InicarSesionComponent', () => {
  let component: InicarSesionComponent;
  let fixture: ComponentFixture<InicarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicarSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
