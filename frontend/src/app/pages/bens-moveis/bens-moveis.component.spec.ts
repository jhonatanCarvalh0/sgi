import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BensMoveisComponent } from './bens-moveis.component';

describe('BensMoveisComponent', () => {
  let component: BensMoveisComponent;
  let fixture: ComponentFixture<BensMoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BensMoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BensMoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
