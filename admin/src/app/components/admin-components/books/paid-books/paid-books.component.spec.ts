import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidBooksComponent } from './paid-books.component';

describe('PaidBooksComponent', () => {
  let component: PaidBooksComponent;
  let fixture: ComponentFixture<PaidBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
