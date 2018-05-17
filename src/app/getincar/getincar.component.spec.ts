import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetincarComponent } from './getincar.component';

describe('GetincarComponent', () => {
  let component: GetincarComponent;
  let fixture: ComponentFixture<GetincarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetincarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetincarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
