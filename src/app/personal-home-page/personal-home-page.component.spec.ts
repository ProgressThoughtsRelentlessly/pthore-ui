import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHomePageComponent } from './personal-home-page.component';

describe('PersonalHomePageComponent', () => {
  let component: PersonalHomePageComponent;
  let fixture: ComponentFixture<PersonalHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
