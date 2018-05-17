import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitchschoolComponent } from './ditchschool.component';

describe('DitchschoolComponent', () => {
  let component: DitchschoolComponent;
  let fixture: ComponentFixture<DitchschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitchschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitchschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
