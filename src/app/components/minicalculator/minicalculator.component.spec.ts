import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicalculatorComponent } from './minicalculator.component';

describe('MinicalculatorComponent', () => {
  let component: MinicalculatorComponent;
  let fixture: ComponentFixture<MinicalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicalculatorComponent ]
    })
    .compileComponents();

    component = new MinicalculatorComponent();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add method.', () => {
    component.operatorA = 20;
    component.operatorB = 10;

    component.Add();

    expect(component.resultado).toEqual(30)
  });

  it('Subtract method.', () => {
    component.operatorA = 20;
    component.operatorB = 10;

    component.Subtract();

    expect(component.resultado).toEqual(10)
  });

  it('Multiply method.', () => {
    component.operatorA = 100;
    component.operatorB = 11;

    component.Multiply();

    expect(component.resultado).toEqual(1100)
  });

  it('Divide method.', () => {
    component.operatorA = 84;
    component.operatorB = 12;

    component.Divide();

    expect(component.resultado).toEqual(7)
  });


});
