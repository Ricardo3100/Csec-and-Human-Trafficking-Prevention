import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuringcarComponent } from './duringcar.component';

describe('DuringcarComponent', () => {
  let component: DuringcarComponent;
  let fixture: ComponentFixture<DuringcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuringcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuringcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
