import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsecComponent } from './csec.component';

describe('CsecComponent', () => {
  let component: CsecComponent;
  let fixture: ComponentFixture<CsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
