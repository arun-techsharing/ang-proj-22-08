import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpReactiveComponent } from './add-emp-reactive.component';

describe('AddEmpReactiveComponent', () => {
  let component: AddEmpReactiveComponent;
  let fixture: ComponentFixture<AddEmpReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
