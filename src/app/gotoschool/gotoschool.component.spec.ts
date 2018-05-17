import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoschoolComponent } from './gotoschool.component';

describe('GotoschoolComponent', () => {
  let component: GotoschoolComponent;
  let fixture: ComponentFixture<GotoschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
