import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/model/data-model';

@Component({
  selector: 'app-data-module',
  templateUrl: './data-module.component.html',
  styleUrls: ['./data-module.component.scss']
})
export class DataModuleComponent implements OnInit {

  constructor() { }

  rows = [];
  values = [];
  tableDatas : TableData[] = [{
    id: "01",
    start : "10.00",
    end : "10.06",
    min_start : "10%",
    min_end : "90%"
  },
  {
    id: "02",
    start : "10.12",
    end : "10.18",
    min_start : "10%",
    min_end : "90%" 
  }
];
  ngOnInit() {
  }

  addField(){
    this.tableDatas.push({
      id: "",
      start: "",
      end: "",
      min_start: "",
      min_end: ""
    })
  }
  
  removeField(i){
    this.tableDatas.splice(i,1);
  }
  show(){
    console.log('Cross works')
  }

}
