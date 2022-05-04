import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotStatusReportComponent } from './plot-status-report.component';

describe('PlotStatusReportComponent', () => {
  let component: PlotStatusReportComponent;
  let fixture: ComponentFixture<PlotStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotStatusReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
