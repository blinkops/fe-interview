import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortSectionComponent } from './filter-sort-section.component';

describe('FilterSortSectionComponent', () => {
  let component: FilterSortSectionComponent;
  let fixture: ComponentFixture<FilterSortSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSortSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSortSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
