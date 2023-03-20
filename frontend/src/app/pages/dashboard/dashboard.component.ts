import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// core components

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart: any;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {}
}
