import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddedPerMonthComponent } from './users-added-per-month.component';

describe('UsersAddedPerMonthComponent', () => {
  let component: UsersAddedPerMonthComponent;
  let fixture: ComponentFixture<UsersAddedPerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAddedPerMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAddedPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
