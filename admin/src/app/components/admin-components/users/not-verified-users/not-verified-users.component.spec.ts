import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotVerifiedUsersComponent } from './not-verified-users.component';

describe('NotVerifiedUsersComponent', () => {
  let component: NotVerifiedUsersComponent;
  let fixture: ComponentFixture<NotVerifiedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotVerifiedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotVerifiedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
