import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatInfoComponent } from './seat-info.component';

describe('SeatInfoComponent', () => {
  let component: SeatInfoComponent;
  let fixture: ComponentFixture<SeatInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatInfoComponent]
    });
    fixture = TestBed.createComponent(SeatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
