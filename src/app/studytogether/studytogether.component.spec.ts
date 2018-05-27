import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudytogetherComponent } from './studytogether.component';

describe('StudytogetherComponent', () => {
  let component: StudytogetherComponent;
  let fixture: ComponentFixture<StudytogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudytogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudytogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
