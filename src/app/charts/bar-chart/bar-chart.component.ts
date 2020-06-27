import { Component, OnInit } from "@angular/core";
import { SalesDataService } from "src/app/services/sales-data.service";
import * as moment from "moment";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe((res) => {
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map((x) => x[0]).reverse();
      this.barChartData = [
        { data: localChartData.map((x) => x[1]), label: "sales" },
      ];
    });
  }

  getChartData(res: Response) {
    this.orders = res["page"]["data"];
    const data = this.orders.map((o) => o.total);
    const labels = this.orders.map((o) =>
      moment(new Date(o.placed)).format("YY-MM-DD")
    );
    const formattedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format("YY-MM-DD"), e.total]);
      return r;
    }, []);

    console.log("formatterOrders : ", formattedOrders);

    const p = [];
    const chartData = formattedOrders.reduce((r, e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;

    // const myData = [3, 4, 5].reduce((sum, value) => {
    //   console.log("sum:", sum, "value: ", value);
    //   return sum + value;
    // }, 0);
  }
}

// const SAMPLE_BARCHART_DATA: any[] = [
//   {
//     data: [65, 59, 80, 56, 54, 30, 14],
//     label: "Q3 Sales",
//   },
//   {
//     data: [85, 19, 30, 76, 94, 20, 34],
//     label: "Q4 Sales",
//   },
// ];

// const SAMPLE_BARCHART_LABELS: string[] = [
//   "W1",
//   "W2",
//   "W3",
//   "W4",
//   "W5",
//   "W6",
//   "W7",
// ];
