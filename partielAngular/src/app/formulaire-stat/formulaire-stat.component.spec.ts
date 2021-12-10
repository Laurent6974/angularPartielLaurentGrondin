import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireStatComponent } from './formulaire-stat.component';

describe('FormulaireStatComponent', () => {
  let component: FormulaireStatComponent;
  let fixture: ComponentFixture<FormulaireStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
