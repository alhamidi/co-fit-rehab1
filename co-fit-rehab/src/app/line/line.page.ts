import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart, registerables  } from "chart.js";

@Component({
  selector: "app-line",
  templateUrl: "line.page.html",
  styleUrls: ["line.page.scss"]
})
export class LinePage implements OnInit {
 
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
 
  private lineChart: Chart;
 
  constructor() {
    Chart.register(...registerables);
  }
 
  ngOnInit(){}
  
  ionViewDidEnter() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
          label: "Stock A",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "rgba(225,0,0,0.4)",
          borderColor: "red", // The main line color
          borderCapStyle: 'square',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "black",
          pointBackgroundColor: "white",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "yellow",
          pointHoverBorderColor: "brown",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: [65, 59, 80, 81, 56, 55, 40, ,60,55,30,78],
          spanGaps: true,
        }, 
        {
          label: "Stock B",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "rgba(167,105,0,0.4)",
          borderColor: "rgb(167, 105, 0)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "white",
          pointBackgroundColor: "black",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "brown",
          pointHoverBorderColor: "yellow",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: false
          data: [10, 20, 60, 95, 64, 78, 90,,70,40,70,89],
          spanGaps: false,
        }]
      }
    });
  }
}