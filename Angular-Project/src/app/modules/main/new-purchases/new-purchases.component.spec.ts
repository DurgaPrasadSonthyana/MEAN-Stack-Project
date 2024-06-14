import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPurchasesComponent } from './new-purchases.component';

describe('NewPurchasesComponent', () => {
  let component: NewPurchasesComponent;
  let fixture: ComponentFixture<NewPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPurchasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
