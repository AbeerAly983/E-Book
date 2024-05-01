import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/admin/charts.service';
@Component({
  selector: 'app-all-profits',
  templateUrl: './all-profits.component.html',
  styleUrls: ['./all-profits.component.css'],
})
export class AllProfitsComponent {
  chart!: Chart;
  Data: any[] = [];
  Name: any[] = [];
  Value: any[] = [];
  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.allProfits();
  }

  allProfits() {
    const token = localStorage.getItem('access_token');
    this.service.all_profits(token).subscribe({
      next: (res: any) => {
        this.Data = [
          { name: 'todayProfit', value: res.todayProfit },
          { name: 'thisMonthProfit', value: res.thisMonthProfit },
          { name: 'thisYearProfit', value: res.thisYearProfit },
          { name: 'allProfit', value: res.allProfit },
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
        text: 'Profits',
      },
      series: [
        {
          name: 'Profit',
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
