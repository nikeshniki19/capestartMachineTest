import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersDashComponent } from './publishers-dash.component';

describe('PublishersDashComponent', () => {
  let component: PublishersDashComponent;
  let fixture: ComponentFixture<PublishersDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishersDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
