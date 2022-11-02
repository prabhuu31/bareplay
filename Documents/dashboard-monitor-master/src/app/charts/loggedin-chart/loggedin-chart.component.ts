import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { CardComponent } from 'src/app/card/card.component';
import { chartLebles, refershInterval } from 'src/app/core/global';
import { ChartDataService } from 'src/app/service/chart-data/chartdata.service';


@Component({
  selector: 'app-loggedin-chart',
  templateUrl: './loggedin-chart.component.html',
  styleUrls: ['./loggedin-chart.component.css']
})
export class LoggedinChartComponent implements OnInit {
 
  public lineChartData: ChartDataSets[] 
      = this.chartDataService.getUserData(this.parent.selectedPeriod);

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined ;
  
  public lineChartLabels: Label[] = chartLebles;
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private chartDataService: ChartDataService,
    private parent: CardComponent) { }

  ngOnInit() {    
    setInterval(() => {
      this.lineChartData = this.chartDataService.getUserData(this.parent.selectedPeriod);
  }, refershInterval);
  }
}
