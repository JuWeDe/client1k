import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchFormComponent } from './flight-search-form.component';

describe('FlightSearchFormComponent', () => {
  let component: FlightSearchFormComponent;
  let fixture: ComponentFixture<FlightSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchFormComponent]
    });
    fixture = TestBed.createComponent(FlightSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
