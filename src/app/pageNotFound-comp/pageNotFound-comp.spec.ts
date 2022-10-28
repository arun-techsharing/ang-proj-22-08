import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageNotFoundComp } from './pageNotFound-comp';

describe('FirstCompComponent', () => {
  let component: pageNotFoundComp;
  let fixture: ComponentFixture<pageNotFoundComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pageNotFoundComp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pageNotFoundComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
