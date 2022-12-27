import { Component, ElementRef, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { CardComponent } from 'src/app/card/card.component';
import { chartLebles, refershInterval } from 'src/app/core/global';
import { ChartDataService } from 'src/app/service/chart-data/chartdata.service';

@Component({
  selector: 'app-transactions-chart',
  templateUrl: './transactions-chart.component.html',
  styleUrls: ['./transactions-chart.component.css']
})
export class TransactionsChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = chartLebles;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] 
      = this.chartDataService.getTransactionData(this.parent.selectedPeriod);

  constructor(private chartDataService: ChartDataService, 
    private parent: CardComponent) { }

  ngOnInit() {    
    setInterval(() => {
      this.barChartData = this.chartDataService.getTransactionData(this.parent.selectedPeriod);
  }, refershInterval);
  }
}

