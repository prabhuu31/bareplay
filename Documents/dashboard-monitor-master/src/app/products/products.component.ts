import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MiniCardSummary } from '../service/mini-card/mini-card-summary';
import { MiniCardSummaryService } from '../service/mini-card/mini-card-summary.service';
import { refershInterval } from '../core/global';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

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
        columns: 3,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 }
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private summaryService: MiniCardSummaryService) {}

  ngOnInit() {
    this.loadSummaryData();
    setInterval(() => {
      this.loadSummaryData();
    }, refershInterval);
  }

  async loadSummaryData() {
    this.miniCardData = await this.summaryService.getMiniCardDetails().toPromise();
  }
}
