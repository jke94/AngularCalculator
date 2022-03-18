import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minicalculator',
  templateUrl: './minicalculator.component.html',
  styleUrls: ['./minicalculator.component.css']
})
export class MinicalculatorComponent implements OnInit {

  operatorA : number = 0;
  operatorB : number = 0;
  resultado : number = 0;

  resultadoString : string;

  constructor() 
  {
    this.resultadoString = "Realice una operación..."
  }

  ngOnInit(): void {
  }

  Add() : void
  {
    this.resultado = this.operatorA + this.operatorB;

    this.resultadoString = this.operatorA + " + " + this.operatorB + " = " + this.resultado;
  }

  Subtract() : void
  {
    this.resultado = this.operatorA - this.operatorB;

    this.resultadoString = this.operatorA + " - " + this.operatorB + " = " + this.resultado;
  }

  Multiply() : void
  {
    this.resultado = this.operatorA * this.operatorB;

    this.resultadoString = this.operatorA + " x " + this.operatorB + " = " + this.resultado;
  }
  
  Divide() : void
  {
    this.resultado = this.operatorA / this.operatorB;

    this.resultadoString = this.operatorA + " / " + this.operatorB + " = " + this.resultado;
  }

}
