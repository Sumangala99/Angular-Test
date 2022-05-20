import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLoanComponent } from './get-all-loan.component';

describe('GetAllLoanComponent', () => {
  let component: GetAllLoanComponent;
  let fixture: ComponentFixture<GetAllLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
