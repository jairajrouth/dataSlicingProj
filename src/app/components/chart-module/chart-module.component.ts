import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-chart-module',
  templateUrl: './chart-module.component.html',
  styleUrls: ['./chart-module.component.scss']
})
export class ChartModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

var LineChart = new Chart('myLineChart', {
    type: 'line',
    data: {
        labels: ['10.00', '10.05', '10.10', '10.15', '10.20', '10.25', 
        '10.30', '10.35', '10.40', '10.45', '10.50', '10.55', '11.00'],
        datasets: [{
            label: '# of Votes',
            data: [10, 19, 3, 5, 2, 3],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }

}
