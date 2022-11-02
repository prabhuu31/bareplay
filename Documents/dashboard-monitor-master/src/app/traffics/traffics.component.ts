import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MiniCardSummary } from '../service/mini-card/mini-card-summary';
import { LoggedinChartComponent } from '../charts/loggedin-chart/loggedin-chart.component';
import { ChartDataService } from '../service/chart-data/chartdata.service';
import { TransactionsChartComponent } from '../charts/transactions-chart/transactions-chart.component';
import { chartLebles } from '../core/global';

@Component({
  selector: 'app-traffics',
  templateUrl: './traffics.component.html',
  styleUrls: ['./traffics.component.css']
})
export class TrafficsComponent  {

  @ViewChild('userChart')
  private userChart: LoggedinChartComponent ;

  @ViewChild('transactionChart')
  private transactionChart: TransactionsChartComponent ;

  period: string[] = chartLebles; 

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          chart: { cols: 1, rows: 1 }
        };
      }
 
     return {
        columns: 4,
        chart: { cols: 2, rows: 2 }
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private chartDataService: ChartDataService) {}

  ngOnInit() {

  }

  loadUserData(selectedYear:string){
    this.userChart.lineChartData = this.chartDataService.getUserData(selectedYear)
  }

  loadTransactionData(selectedYear:string){
    this.transactionChart.barChartData = this.chartDataService.getTransactionData(selectedYear)
  }
}
