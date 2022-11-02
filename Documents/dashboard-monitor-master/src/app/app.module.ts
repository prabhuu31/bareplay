import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule} from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { LoggedinChartComponent } from './charts/loggedin-chart/loggedin-chart.component';
import { TransactionsChartComponent } from './charts/transactions-chart/transactions-chart.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { MiniCardSummaryService } from './service/mini-card/mini-card-summary.service';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ChartDataService } from './service/chart-data/chartdata.service';
import { ProductsComponent } from './products/products.component';
import { TrafficsComponent } from './traffics/traffics.component';
import { IntermoduleCommComponent } from './charts/intermodule-comm/intermodule-comm.component';
import { ErrorsComponent } from './charts/errors/errors.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    LoggedinChartComponent,
    TransactionsChartComponent,
    MiniCardComponent,
    ProductsComponent,
    TrafficsComponent,
    IntermoduleCommComponent,
    ErrorsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [MiniCardSummaryService,ChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
