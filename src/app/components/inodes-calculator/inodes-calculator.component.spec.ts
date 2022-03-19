import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InodesCalculatorComponent } from './inodes-calculator.component';

describe('InodesCalculatorComponent', () => {
  let component: InodesCalculatorComponent;
  let fixture: ComponentFixture<InodesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InodesCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InodesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
