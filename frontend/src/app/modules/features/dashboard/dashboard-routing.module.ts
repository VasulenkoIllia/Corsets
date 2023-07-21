import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from "./pages/orders/orders.component";
import {StatsComponent} from "./pages/stats/stats.component";
import {DashboardComponent} from "./dashboard.component";
import {StockComponent} from "./pages/stock/stock.component";

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    children:[
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "stats",
        component: StatsComponent
      },
      {
        path: "stock",
        component: StockComponent
      },
      {
        path: "**",
        redirectTo: "orders"
      }
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
