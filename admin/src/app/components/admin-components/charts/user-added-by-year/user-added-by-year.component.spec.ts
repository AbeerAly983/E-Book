import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddedByYearComponent } from './user-added-by-year.component';

describe('UserAddedByYearComponent', () => {
  let component: UserAddedByYearComponent;
  let fixture: ComponentFixture<UserAddedByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddedByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddedByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
