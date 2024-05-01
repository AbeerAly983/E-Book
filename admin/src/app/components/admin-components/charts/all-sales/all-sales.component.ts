import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/admin/charts.service';
@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.css'],
})
export class AllSalesComponent {
  chart!: Chart;
  Data: any[] = [];
  Name: any[] = [];
  Value: any[] = [];
  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.allSales();
  }

  allSales() {
    const token = localStorage.getItem('access_token');
    this.service.sales(token).subscribe({
      next: (res: any) => {
        this.Data = [
          { name: 'numSalePaidToday', value: res.numSalePaidToday },
          { name: 'numSaleThisMonth', value: res.numSaleThisMonth },
          { name: 'numSaleThisYear', value: res.numSaleThisYear },
          { name: 'numAllSales', value: res.numAllSales },
        ];
        this.Data.forEach((item: { name: any; value: any }) => {
          this.Name.push(item.name);
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
    const data = name.map((yearItem: any, index: any) => ({
      name: yearItem,
      y: value[index],
    }));
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 325,
      },
      title: {
        text: 'Book Sales',
      },
      series: [
        {
          name: 'sale',
          type: 'pie',
          color: 'var(--secondary-color)',
          data: data,
        },
      ],

      credits: {
        enabled: false,
      },
    });
  }
}
