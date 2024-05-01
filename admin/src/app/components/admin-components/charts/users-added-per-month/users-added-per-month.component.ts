import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/admin/charts.service';

@Component({
  selector: 'app-users-added-per-month',
  templateUrl: './users-added-per-month.component.html',
  styleUrls: ['./users-added-per-month.component.css'],
})
export class UsersAddedPerMonthComponent {
  chart!: Chart;
  Month: any[] = [];
  Value: any[] = [];

  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.getUsersAddedPerMonth();
  }

  getUsersAddedPerMonth() {
    const token = localStorage.getItem('access_token');
    this.service.users_added_per_month_this_year(token).subscribe({
      next: (res: any) => {
        res.forEach((item: { month: any; value: any }) => {
          this.Month.push(item.month);
          this.Value.push(item.value);
        });
        this.renderCharts(this.Month, this.Value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  renderCharts(month: any, value: any) {
    this.chart = new Chart({
      chart: {
        type: 'column',
        height: 325,
      },
      title: {
        text: 'User Added Monthly',
      },
      xAxis: {
        categories: month,
      },
      yAxis: {
        title: {
          text: 'Number Of Users',
        },
        labels: {
          format: '{value:.0f}', // Display only integer numbers
        },
        allowDecimals: false, // Disable decimal numbers on the yAxis
      },

      series: [
        {
          name: 'Users',
          type: 'column',
          color: '#594639',
          data: value,
        },
      ],

      credits: {
        enabled: false,
      },
    });
  }
}
