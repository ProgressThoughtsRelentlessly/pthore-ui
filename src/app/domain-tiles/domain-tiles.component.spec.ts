import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainTilesComponent } from './domain-tiles.component';

describe('DomainTilesComponent', () => {
  let component: DomainTilesComponent;
  let fixture: ComponentFixture<DomainTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
