import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTrackerComponent } from './steps-tracker.component';

describe('StepsTrackerComponent', () => {
  let component: StepsTrackerComponent;
  let fixture: ComponentFixture<StepsTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsTrackerComponent]
    });
    fixture = TestBed.createComponent(StepsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});