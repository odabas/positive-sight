import { Component, OnInit } from "@angular/core";

const SAMPLE_BARCHART_DATA: any[] = [
  {
    data: [65, 59, 80, 56, 54, 30, 14],
    label: "Q3 Sales",
  },
  {
    data: [85, 19, 30, 76, 94, 20, 34],
    label: "Q4 Sales",
  },
];

const SAMPLE_BARCHART_LABELS: string[] = [
  "W1",
  "W2",
  "W3",
  "W4",
  "W5",
  "W6",
  "W7",
];

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = "bar";
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  ngOnInit() {}
}
