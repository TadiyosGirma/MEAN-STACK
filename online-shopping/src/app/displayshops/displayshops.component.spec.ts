import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayshopsComponent } from './displayshops.component';

describe('DisplayshopsComponent', () => {
  let component: DisplayshopsComponent;
  let fixture: ComponentFixture<DisplayshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
