import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieTrackerComponent } from './calorie-tracker.component';

describe('CalorieTrackerComponent', () => {
  let component: CalorieTrackerComponent;
  let fixture: ComponentFixture<CalorieTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalorieTrackerComponent]
    });
    fixture = TestBed.createComponent(CalorieTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});