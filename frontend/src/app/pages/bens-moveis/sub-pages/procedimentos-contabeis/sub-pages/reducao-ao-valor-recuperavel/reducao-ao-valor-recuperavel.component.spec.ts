import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducaoAoValorRecuperavelComponent } from './reducao-ao-valor-recuperavel.component';

describe('ReducaoAoValorRecuperavelComponent', () => {
  let component: ReducaoAoValorRecuperavelComponent;
  let fixture: ComponentFixture<ReducaoAoValorRecuperavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducaoAoValorRecuperavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducaoAoValorRecuperavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
