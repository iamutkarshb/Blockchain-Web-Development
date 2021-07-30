import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollServiceComponent } from './poll-service.component';

describe('PollServiceComponent', () => {
  let component: PollServiceComponent;
  let fixture: ComponentFixture<PollServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
