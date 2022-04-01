import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inodes-calculator',
  templateUrl: './inodes-calculator.component.html',
  styleUrls: ['./inodes-calculator.component.css']
})
export class InodesCalculatorComponent implements OnInit {

  fileSize : number = 0;
  nDirectPointers : number = 0;
  nIndirectSimplePointers : number = 0;
  nIndirectDoublePointers : number = 0;
  nIndirectTriplePointers : number = 0;
  clusterSize : number = 0;
  directionSize : number = 0;
  nDirByBlock : number = 0;
  nMaxFileSize : number = 0;
  nDataBlock : number = 0;

  nDataBlockDirect : number= 0;
  nDataBlockSimpleIndirect : number= 0;
  nDataBlockDoubleIndirect : number= 0;
  nDataBlockTripleIndirect : number= 0;
  

  constructor() { }

  ngOnInit(): void {
  }

  Calculate() : void
  {
    this.nDirByBlock = (this.clusterSize * 1024) / this.directionSize

    this.nMaxFileSize = (this.clusterSize * this.nDirectPointers * Math.pow(this.nDirByBlock, 0)) + 
                        (this.clusterSize * this.nIndirectSimplePointers * Math.pow(this.nDirByBlock, 1)) + 
                        (this.clusterSize * this.nIndirectDoublePointers * Math.pow(this.nDirByBlock, 2)) + 
                        (this.clusterSize * this.nIndirectTriplePointers * Math.pow(this.nDirByBlock, 3));

    this.nDataBlock = (this.nDirectPointers * Math.pow(this.nDirByBlock, 0)) +
                      (this.nIndirectSimplePointers * Math.pow(this.nDirByBlock, 1)) + 
                      (this.nIndirectDoublePointers * Math.pow(this.nDirByBlock, 2)) +
                      (this.nIndirectTriplePointers * Math.pow(this.nDirByBlock, 3));


    this.nDataBlockDirect = (this.nDirectPointers * Math.pow(this.nDirByBlock, 0))
    this.nDataBlockSimpleIndirect = (this.nIndirectSimplePointers * Math.pow(this.nDirByBlock, 1));
    this.nDataBlockDoubleIndirect = (this.nIndirectDoublePointers * Math.pow(this.nDirByBlock, 2));
    this.nDataBlockTripleIndirect = (this.nIndirectTriplePointers * Math.pow(this.nDirByBlock, 3));
    
  }
  Reset() : void
  {
    this.fileSize = 0
    this.nDirectPointers = 0
    this.nIndirectSimplePointers = 0
    this.nIndirectDoublePointers = 0
    this.nIndirectTriplePointers = 0
    this.clusterSize = 0
    this.directionSize = 0
    this.nDirByBlock = 0
    this.nMaxFileSize = 0
    this.nDataBlock = 0
    this.nDataBlockDirect = 0;
    this.nDataBlockSimpleIndirect = 0;
    this.nDataBlockDoubleIndirect = 0;
    this.nDataBlockTripleIndirect = 0;
  }
}
