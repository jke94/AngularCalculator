import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inodes-calculator',
  templateUrl: './inodes-calculator.component.html',
  styleUrls: ['./inodes-calculator.component.css']
})
export class InodesCalculatorComponent implements OnInit {

  nDirectPointers : number = 0;
  nSimpleDirectPointers : number = 0;
  nDoubleDirectPointers : number = 0;
  nTripleDirectPointers : number = 0;
  clusterSize : number = 0;
  directionSize : number = 0;
  nDirByBlock : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Calculate() : void
  {
    this.nDirByBlock = this.clusterSize / this.directionSize
  }
  Reset() : void
  {
    this.nDirectPointers = 0
    this.nSimpleDirectPointers = 0
    this.nDoubleDirectPointers = 0
    this.nTripleDirectPointers = 0
    this.clusterSize = 0
    this.directionSize = 0
    this.nDirByBlock = 0
  }
}
