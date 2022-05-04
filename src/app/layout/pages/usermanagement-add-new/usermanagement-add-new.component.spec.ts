import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementAddNewComponent } from './usermanagement-add-new.component';

describe('UsermanagementAddNewComponent', () => {
  let component: UsermanagementAddNewComponent;
  let fixture: ComponentFixture<UsermanagementAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagementAddNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
