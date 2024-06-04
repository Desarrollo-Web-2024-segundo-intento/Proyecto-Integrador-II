import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDashbComponent } from './nav-dashb.component';

describe('NavDashbComponent', () => {
  let component: NavDashbComponent;
  let fixture: ComponentFixture<NavDashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDashbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavDashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
