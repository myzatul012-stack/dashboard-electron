import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DashboardService } from '../dashboard.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableUsers: any[] = [];

  donutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{ data: [] }]
  };

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], backgroundColor: '#aaa' }]
  };

  donutChartOptions: ChartOptions<'doughnut'> = { responsive: true,  maintainAspectRatio: true };
  barChartOptions: ChartOptions<'bar'> = { responsive: true };

  constructor(private dashboardService: DashboardService, private authService: AuthService) {}

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe({
      next: (res) => {
        // Donut chart
        this.donutChartData = {
          labels: res.chartDonut.map((item: any) => item.name),
          datasets: [{ data: res.chartDonut.map((item: any) => item.value),
            backgroundColor: ['#c8c8c8', '#a8a8a8', '#888888', '#646464']
           }]
        };

        // Bar chart
        this.barChartData = {
          labels: res.chartBar.map((item: any) => item.name),
          datasets: [{
            label: 'Value',
            data: res.chartBar.map((item: any) => item.value),
            backgroundColor: '#aaa'
          }]
        };

        // Table
        this.tableUsers = res.tableUsers;
      },
      error: (err) => console.error(err)
    });
  }

  logout() {
    this.authService.logout();
  }
}