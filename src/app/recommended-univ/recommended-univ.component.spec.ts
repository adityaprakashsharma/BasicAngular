import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedUnivComponent } from './recommended-univ.component';

describe('RecommendedUnivComponent', () => {
  let component: RecommendedUnivComponent;
  let fixture: ComponentFixture<RecommendedUnivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedUnivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
