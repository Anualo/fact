import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHANGEPASSWORDComponent } from './change-password.component';

describe('CHANGEPASSWORDComponent', () => {
  let component: CHANGEPASSWORDComponent;
  let fixture: ComponentFixture<CHANGEPASSWORDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHANGEPASSWORDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CHANGEPASSWORDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
