import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MiniCardSummary } from '../service/mini-card/mini-card-summary';
import { MiniCardSummaryService } from '../service/mini-card/mini-card-summary.service';
import { LoggedinChartComponent } from '../charts/loggedin-chart/loggedin-chart.component';
import { ChartDataService } from '../service/chart-data/chartdata.service';
import { TransactionsChartComponent } from '../charts/transactions-chart/transactions-chart.component';
import { refershInterval } from '../core/global';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  appId = 'theme1';
  @ViewChild('userChart')
  private userChart: LoggedinChartComponent ;

  @ViewChild('transactionChart')
  private transactionChart: TransactionsChartComponent ;

  miniCardData: MiniCardSummary[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 }
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 }
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private summaryService: MiniCardSummaryService,
    private chartDataService: ChartDataService) {}

  ngOnInit() {
    this.loadSummaryData();
    setInterval(() => {
      this.loadSummaryData();
    }, refershInterval);
  }

  async loadSummaryData() {
    this.miniCardData = await this.summaryService.getMiniCardSummary().toPromise();
  }

  loadUserData(selectedYear:string){
    this.userChart.lineChartData = this.chartDataService.getUserData(selectedYear)
  }

  loadTransactionData(selectedYear:string){
    this.transactionChart.barChartData = this.chartDataService.getTransactionData(selectedYear)
  }
}
