import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBenefitsComponent } from './sign-up-benefits.component';

describe('SignUpBenefitsComponent', () => {
  let component: SignUpBenefitsComponent;
  let fixture: ComponentFixture<SignUpBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
