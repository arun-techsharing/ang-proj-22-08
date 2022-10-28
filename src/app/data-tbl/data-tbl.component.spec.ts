import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTblComponent } from './data-tbl.component';

describe('DataTblComponent', () => {
  let component: DataTblComponent;
  let fixture: ComponentFixture<DataTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
