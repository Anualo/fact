import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDueCustomersComponent } from './over-due-customers.component';

describe('OverDueCustomersComponent', () => {
  let component: OverDueCustomersComponent;
  let fixture: ComponentFixture<OverDueCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverDueCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverDueCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
