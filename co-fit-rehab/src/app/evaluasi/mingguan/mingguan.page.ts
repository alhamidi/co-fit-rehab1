import { Component, OnInit, Inject, NgZone, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { formatDate } from '@angular/common';

import { WeeklyEvaluationService } from './../../services/weekly-evaluation.service';
import { UserdataService } from './../../services/userdata.service';

import { Chart, registerables  } from "chart.js";

@Component({
  selector: 'app-mingguan',
  templateUrl: './mingguan.page.html',
  styleUrls: ['./mingguan.page.scss'],
})

export class MingguanPage implements OnInit {
  @ViewChild("bfiCanvas") bfiCanvas: ElementRef;
  @ViewChild("stsCanvas") stsCanvas: ElementRef;

  Evaluation: any = [];

  private bfiChart: Chart;
  private stsChart: Chart;

  constructor(
    private evalService: WeeklyEvaluationService,
    private userdataService: UserdataService,
    private router: Router
    ) { Chart.register(...registerables); }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var labels = [];
    var datasetBFI = [];
    var datasetSTS = [];

    this.userdataService.getPatientId().then((patientId) => {
      this.evalService.getEvaluations(patientId).subscribe((response) => {
        this.Evaluation = response;
        console.log('**response ' + this.Evaluation);

        response['data'].forEach((item) => {
          let date = new Date(item['tanggal']);
          var formattedDate = formatDate(date, 'dd MMM', 'en');
          labels.push(formattedDate);
          datasetBFI.push(item['bfi']);
          datasetSTS.push(item['sts30detik']);
        });

    if(this.bfiChart) {
      this.bfiChart.destroy();
    }

    // create line chart
    this.bfiChart = new Chart(this.bfiCanvas.nativeElement, {
      type: "line",
      options: {
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      data: {
        labels: labels,
        datasets: [
        {
          label: "Tingkat Kelelahan", // BFI
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
          data: datasetBFI,
          spanGaps: true,
        }
        ]
      }
    });

    if(this.stsChart) {
      this.stsChart.destroy();
    }

    // create line chart
    this.stsChart = new Chart(this.stsCanvas.nativeElement, {
      type: "line",
      options: {
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      data: {
        labels: labels,
        datasets: [
        {
          label: "STS 30 Detik", // STS
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
          data: datasetSTS,
          spanGaps: true,
        }
        ]
      }
    });
  })  
});
}
}

