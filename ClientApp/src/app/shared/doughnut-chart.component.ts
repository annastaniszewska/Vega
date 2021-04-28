import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  template: `<div class="chart-wrapper">
                <canvas baseChart 
                    [data]="doughnutChartData"
                    [labels]="doughnutChartLabels"
                    [chartType]="doughnutChartType">
                </canvas>
            </div>`
})

export class DoughnutChartComponent {

  doughnutChartLabels: Label[] = ['BMW', 'Audi', 'Volvo'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

}