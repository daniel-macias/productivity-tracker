import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekProgressComponent } from './week-progress.component';

describe('WeekProgressComponent', () => {
  let component: WeekProgressComponent;
  let fixture: ComponentFixture<WeekProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
