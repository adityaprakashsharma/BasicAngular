import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUniversityComponent } from './all-university.component';

describe('AllUniversityComponent', () => {
  let component: AllUniversityComponent;
  let fixture: ComponentFixture<AllUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
