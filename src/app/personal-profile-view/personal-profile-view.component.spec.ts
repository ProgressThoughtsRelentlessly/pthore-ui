import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProfileViewComponent } from './personal-profile-view.component';

describe('PersonalProfileViewComponent', () => {
  let component: PersonalProfileViewComponent;
  let fixture: ComponentFixture<PersonalProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
