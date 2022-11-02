import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { pieChartLebles } from 'src/app/core/global';

@Component({
  selector: 'app-intermodule-comm',
  templateUrl: './intermodule-comm.component.html',
  styleUrls: ['./intermodule-comm.component.css']
})
export class IntermoduleCommComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = pieChartLebles;
  public pieChartData: SingleDataSet = [300, 500, 100, 250];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
