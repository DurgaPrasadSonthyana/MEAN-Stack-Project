import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFormDialogComponent } from './department-form-dialog.component';

describe('DepartmentFormDialogComponent', () => {
  let component: DepartmentFormDialogComponent;
  let fixture: ComponentFixture<DepartmentFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
