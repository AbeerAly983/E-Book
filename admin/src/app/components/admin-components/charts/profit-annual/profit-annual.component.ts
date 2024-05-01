import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/admin/charts.service';

@Component({
  selector: 'app-profit-annual',
  templateUrl: './profit-annual.component.html',
  styleUrls: ['./profit-annual.component.css'],
})
export class ProfitAnnualComponent {
  chart!: Chart;
  Year: any[] = [];
  Value: any[] = [];

  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.getAnnualProfit();
  }

  getAnnualProfit() {
    const token = localStorage.getItem('access_token');
    this.service.AnnualProfits(token).subscribe({
      next: (res: any) => {
        res.forEach((item: { year: any; value: any }) => {
          this.Year.push(item.year);
          this.Value.push(item.value);
        });
        this.renderCharts(this.Year, this.Value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  renderCharts(year: any, value: any) {
    this.chart = new Chart({
      chart: {
        type: 'line',
        height: 325,
      },
      title: {
        text: 'Annual Profit',
      },
      xAxis: {
        categories: year,
      },
      yAxis: {
        title: {
          text: 'Profit',
        },
        labels: {
          format: '{value:.0f}', // Display only integer numbers
        },
        allowDecimals: false, // Disable decimal numbers on the yAxis
      },

      series: [
        {
          name: 'Profit',
          type: 'line',
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
