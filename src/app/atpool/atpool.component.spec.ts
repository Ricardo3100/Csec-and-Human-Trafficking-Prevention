import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtpoolComponent } from './atpool.component';

describe('AtpoolComponent', () => {
  let component: AtpoolComponent;
  let fixture: ComponentFixture<AtpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
