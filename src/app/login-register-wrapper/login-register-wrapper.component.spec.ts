import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterWrapperComponent } from './login-register-wrapper.component';

describe('LoginRegisterWrapperComponent', () => {
  let component: LoginRegisterWrapperComponent;
  let fixture: ComponentFixture<LoginRegisterWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
