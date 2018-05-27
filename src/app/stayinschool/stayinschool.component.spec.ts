import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayinschoolComponent } from './stayinschool.component';

describe('StayinschoolComponent', () => {
  let component: StayinschoolComponent;
  let fixture: ComponentFixture<StayinschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayinschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayinschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
