import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinChartComponent } from './loggedin-chart.component';

describe('LoggedinChartComponent', () => {
  let component: LoggedinChartComponent;
  let fixture: ComponentFixture<LoggedinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
