import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-module',
  templateUrl: './data-module.component.html',
  styleUrls: ['./data-module.component.scss']
})
export class DataModuleComponent implements OnInit {

  constructor() { }

  name = 'Dynamic Add Fields';
  rows = [];
  values = [];
  ngOnInit() {
  }

  addField(){
    this.rows.push({value : ""});
    console.log('Button Clicked')
  }
  
  removeField(i){
    this.rows.splice(i,1);
  }
  show(){
    console.log('Cross works')
  }

}
