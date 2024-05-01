import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyProfitComponent } from './monthly-profit.component';

describe('MonthlyProfitComponent', () => {
  let component: MonthlyProfitComponent;
  let fixture: ComponentFixture<MonthlyProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyProfitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
