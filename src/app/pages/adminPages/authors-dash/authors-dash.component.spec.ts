import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsDashComponent } from './authors-dash.component';

describe('AuthorsDashComponent', () => {
  let component: AuthorsDashComponent;
  let fixture: ComponentFixture<AuthorsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
