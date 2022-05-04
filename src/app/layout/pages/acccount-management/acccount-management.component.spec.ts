import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcccountManagementComponent } from './acccount-management.component';

describe('AcccountManagementComponent', () => {
  let component: AcccountManagementComponent;
  let fixture: ComponentFixture<AcccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcccountManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
