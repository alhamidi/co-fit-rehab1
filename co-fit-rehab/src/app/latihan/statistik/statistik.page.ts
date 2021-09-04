import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PatientExerciseService } from './../../services/patientexercise.service';
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';

import { Chart, registerables  } from "chart.js";

@Component({
  selector: 'app-statistik',
  templateUrl: './statistik.page.html',
  styleUrls: ['./statistik.page.scss'],
})

export class StatistikPage implements OnInit {

  @ViewChild("hrCanvas") hrCanvas: ElementRef;
  @ViewChild("sato2Canvas") sato2Canvas: ElementRef;
  @ViewChild("sbCanvas") sbCanvas: ElementRef;

  Exercises: any = [];

  private hrChart: Chart;
  private sato2Chart: Chart;
  private sbChart: Chart;
 
  constructor(
    private patientExerciseService: PatientExerciseService,
    private userdataService: UserdataService,
    private router: Router
  ) { Chart.register(...registerables); }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var labels = [];
    var datasetPraHR = [];
    var datasetPascaHR = [];
    var datasetPraSB = [];
    var datasetPascaSB = [];
    var datasetPraSatO2 = [];
    var datasetPascaSatO2 = [];

    this.userdataService.getPatientId().then((patientId) => {
      this.patientExerciseService.getPatientExercises(patientId).subscribe((response) => {
        this.Exercises = response;

        // iterate response, construct labels and the datasets
        response['data'].forEach((item) => {
          labels.push(item['tanggal']);
          datasetPraHR.push(item['pra_hr']);
          datasetPascaHR.push(item['pasca_hr']);
          datasetPraSatO2.push(item['pra_sato2']);
          datasetPascaSatO2.push(item['pasca_sato2']);
          datasetPraSB.push(item['pra_bs']);
          datasetPascaSB.push(item['pasca_bs']);
        });


        // create line chart
        this.hrChart = new Chart(this.hrCanvas.nativeElement, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
        {
          label: "Pra Latihan", // Pra HR
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
          pointRadius: 1,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: true
          data: datasetPraHR,
          spanGaps: true,
        }, 
        {
          label: "Pasca Latihan", // Pasca HR
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
          pointRadius: 1,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: false
          data: datasetPascaHR,
          spanGaps: false,
        }
        ]
      }
    });

        // create line chart
        this.sato2Chart = new Chart(this.sato2Canvas.nativeElement, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
        {
          label: "Pra Latihan", // Pra SatO2
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
          pointRadius: 1,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: true
          data: datasetPraSatO2,
          spanGaps: true,
        }, 
        {
          label: "Pasca Latihan", // Pasca SatO2
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
          pointRadius: 1,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: false
          data: datasetPascaSatO2,
          spanGaps: false,
        }
        ]
      }
    });

        // create line chart
        this.sbChart = new Chart(this.sbCanvas.nativeElement, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
        {
          label: "Pra Latihan", // Pra SB
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
          pointRadius: 1,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: true
          data: datasetPraSB,
          spanGaps: true,
        }, 
        {
          label: "Pasca Latihan", // Pasca SB
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
          pointRadius: 1,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: false
          data: datasetPascaSB,
          spanGaps: false,
        }
        ]
      }
    });

      });
    });
  }
}
