import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/admin/charts.service';

@Component({
  selector: 'app-user-added-by-year',
  templateUrl: './user-added-by-year.component.html',
  styleUrls: ['./user-added-by-year.component.css'],
})
export class UserAddedByYearComponent {
  chart!: Chart;
  Year: any[] = [];
  Value: any[] = [];
  constructor(private service: ChartsService) {}
  ngOnInit() {
    this.subscription();
  }
  subscription() {
    const token = localStorage.getItem('access_token');

    this.service.users_added_by_year(token).subscribe({
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
    const data = year.map((yearItem: any, index: any) => ({
      name: yearItem,
      y: value[index],
    }));
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 325,
      },
      title: {
        text: 'User Added By Years',
      },
      series: [
        {
          name: 'Users',
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
