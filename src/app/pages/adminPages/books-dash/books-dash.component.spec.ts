import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDashComponent } from './books-dash.component';

describe('BooksDashComponent', () => {
  let component: BooksDashComponent;
  let fixture: ComponentFixture<BooksDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
