import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-chart-module',
  templateUrl: './chart-module.component.html',
  styleUrls: ['./chart-module.component.scss']
})
export class ChartModuleComponent implements OnInit {

  chartData = [{
    channel: ['0.4', '0.6', '0.9'],
    time: ['10.00', '10.05', '10.10', '10.15', '10.20', '10.25', 
    '10.30', '10.35', '10.40', '10.45', '10.50', '10.55', '11.00']
  }];

  _chartOption : EChartsOption;

  constructor() { }

  ngOnInit() {


    
this._chartOption = {
  title: {
    text: 'Data Slicing'
},

grid: {
    left: '9%',
    right: '10%',
    bottom: '5%',
    containLabel: true
},
xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['10.00', '10.05', '10.10', '10.15', '10.20', '10.25', 
    '10.30', '10.35', '10.40', '10.45', '10.50', '10.55', '11.00']
},
yAxis: {
    type: 'value'
},
series: [
    {
        type: 'line',
        data: [0.2,0.3,0.1,0.5,0.6,0.1,0.9,0.35,0.6,0.8,0.4, 0.9,0.1]
    },
    {
        type: 'line',
        data: [0.5,0.6,0.15,0.9,0.45,0.6,0.9,0.35,0.6,0.8,0.3,0.66,0.7]
    },
    {
        type: 'line',
        data: [0.9,0.34,0.6,0.7,0.3, 0.9,0.1,0.1,0.5,0.6,0.1,0.4,0.35]
    },
    {
        type: 'line',
        data: [0.35,0.6,0.8,0.6,0.6,0.1,0.9,0.35,0.1,0.8,0.5,0.1,0.3]
    }
]
};

}

}

// var LineChart = new Chart('myLineChart', {
//     type: 'line',
//     data: {
//         labels: ['10.00', '10.05', '10.10', '10.15', '10.20', '10.25', 
//         '10.30', '10.35', '10.40', '10.45', '10.50', '10.55', '11.00'],
//         datasets: [{
//             label: '# of Votes',
//             data: [10, 19, 3, 5, 2, 3],
//             data2: [7, 12, 6, 10, 5, 9]
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// let dataPoints = [];
// 	let y = 0;		
// 	for ( var i = 0; i < 10000; i++ ) {		  
// 		y += Math.round(5 + Math.random() * (-5 - 5));	
// 		dataPoints.push({ y: y});
// 	}
// 	let chart = new CanvasJS.Chart("chartContainer", {
// 		zoomEnabled: true,
// 		animationEnabled: true,
// 		exportEnabled: true,
// 		title: {
// 			text: "Performance Demo - 10000 DataPoints"
// 		},
// 		subtitles:[{
// 			text: "Try Zooming and Panning"
// 		}],
// 		data: [
// 		{
// 			type: "line",                
// 			dataPoints: dataPoints
// 		}]
// 	});
		
// 	chart.render();



