import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfitsComponent } from './all-profits.component';

describe('AllProfitsComponent', () => {
  let component: AllProfitsComponent;
  let fixture: ComponentFixture<AllProfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
