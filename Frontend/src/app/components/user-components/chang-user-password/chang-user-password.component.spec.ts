import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangUserPasswordComponent } from './chang-user-password.component';

describe('ChangUserPasswordComponent', () => {
  let component: ChangUserPasswordComponent;
  let fixture: ComponentFixture<ChangUserPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangUserPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
