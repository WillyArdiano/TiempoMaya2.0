import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMayaComponent } from './calculadora-maya.component';

describe('CalculadoraMayaComponent', () => {
  let component: CalculadoraMayaComponent;
  let fixture: ComponentFixture<CalculadoraMayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraMayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraMayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
