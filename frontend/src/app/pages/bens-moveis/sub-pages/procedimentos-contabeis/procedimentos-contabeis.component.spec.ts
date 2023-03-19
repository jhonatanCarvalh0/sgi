import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentosContabeisComponent } from './procedimentos-contabeis.component';

describe('ProcedimentosContabeisComponent', () => {
  let component: ProcedimentosContabeisComponent;
  let fixture: ComponentFixture<ProcedimentosContabeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimentosContabeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedimentosContabeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
