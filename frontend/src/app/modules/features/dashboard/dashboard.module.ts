import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './pages/stock/stock.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { StatsComponent } from './pages/stats/stats.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';



@NgModule({
  declarations: [
    StockComponent,
    OrdersComponent,
    StatsComponent,
    DashboardComponent,
    DashboardNavigationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
