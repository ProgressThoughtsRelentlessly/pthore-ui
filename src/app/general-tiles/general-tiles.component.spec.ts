import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTilesComponent } from './general-tiles.component';

describe('GeneralTilesComponent', () => {
  let component: GeneralTilesComponent;
  let fixture: ComponentFixture<GeneralTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
