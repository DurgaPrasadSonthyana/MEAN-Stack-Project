import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {

  }
  

}
