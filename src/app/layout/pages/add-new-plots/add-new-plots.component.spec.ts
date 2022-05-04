import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlotsComponent } from './add-new-plots.component';

describe('AddNewPlotsComponent', () => {
  let component: AddNewPlotsComponent;
  let fixture: ComponentFixture<AddNewPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
