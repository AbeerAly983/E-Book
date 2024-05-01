import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDepComponent } from './books-dep.component';

describe('BooksDepComponent', () => {
  let component: BooksDepComponent;
  let fixture: ComponentFixture<BooksDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
