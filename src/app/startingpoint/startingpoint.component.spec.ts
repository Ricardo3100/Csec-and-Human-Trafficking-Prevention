import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingpointComponent } from './startingpoint.component';

describe('StartingpointComponent', () => {
  let component: StartingpointComponent;
  let fixture: ComponentFixture<StartingpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
