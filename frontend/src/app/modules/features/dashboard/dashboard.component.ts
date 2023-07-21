import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template:
    '<app-dashboard-navigation> </app-dashboard-navigation>' +
    '<div id="dashboardContent"><router-outlet></router-outlet></div>',
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
