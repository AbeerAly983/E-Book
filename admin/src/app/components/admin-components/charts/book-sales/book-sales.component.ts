import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/admin/charts.service';
@Component({
  selector: 'app-book-sales',
  templateUrl: './book-sales.component.html',
  styleUrls: ['./book-sales.component.css'],
})
export class BookSalesComponent {
  chart!: Chart;
  Name: any[] = [];
  Value: any[] = [];

  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.getBookSales();
  }

  getBookSales() {
    const token = localStorage.getItem('access_token');
    this.service.bookSales(token).subscribe({
      next: (res: any) => {
        res.forEach((item: { Name: any; value: any }) => {
          this.Name.push(item.Name);
          this.Value.push(item.value);
        });
        this.renderCharts(this.Name, this.Value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  renderCharts(name: any, value: any) {
    this.chart = new Chart({
      chart: {
        type: 'column',
        height: 325,
      },
      title: {
        text: 'Book Sales',
      },
      xAxis: {
        categories: name,
      },
      yAxis: {
        title: {
          text: 'Sale ',
        },
        labels: {
          format: '{value:.0f}', // Display only integer numbers
        },
        allowDecimals: false, // Disable decimal numbers on the yAxis
      },

      series: [
        {
          name: 'Sale',
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
