import { Component, OnInit, Inject, NgZone, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { formatDate } from '@angular/common';

import { MonthlyEvaluationService } from './../../services/monthly-evaluation.service';
import { UserdataService } from './../../services/userdata.service';

import { Chart, registerables  } from "chart.js";

@Component({
  selector: 'app-bulanan',
  templateUrl: './bulanan.page.html',
  styleUrls: ['./bulanan.page.scss'],
})

export class BulananPage implements OnInit {
  @ViewChild("ujCanvas") ujCanvas: ElementRef;
  @ViewChild("ssCanvas") ssCanvas: ElementRef;

  private Evaluation: any = [];
  private bloodPressuredata: any = [];

  private ujChart: Chart;
  private ssChart: Chart;

  constructor(
    private evalService: MonthlyEvaluationService,
    private userdataService: UserdataService,
    private router: Router
  ) { Chart.register(...registerables); }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var labels = [];
    var datasetUjiJalan = [];
    var datasetSkalaSesak = [];

    this.userdataService.getPatientId().then((patientId) => {
      this.evalService.getEvaluations(patientId).subscribe((response) => {
        this.Evaluation = response;
        console.log('**response ' + this.Evaluation);

        response['data'].forEach((item) => {
          let date = new Date(item['tanggal']);
          var formattedDate = formatDate(date, 'dd MMM', 'en');
          labels.push(formattedDate);
          datasetUjiJalan.push(item['uji_jalan']);
          datasetSkalaSesak.push(item['skala_sesak']);

          // construct blood pressure data
          var bpData = {
            'date': formattedDate,
            'sistolik': item['sistolik'],
            'diastolik': item['diastolik']
          }

          this.bloodPressuredata.push(bpData);
        });

    if(this.ujChart) {
      this.ujChart.destroy();
    }

    // create line chart
    this.ujChart = new Chart(this.ujCanvas.nativeElement, {
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
          label: "Uji Jalan", 
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
          data: datasetUjiJalan,
          spanGaps: true,
        }
        ]
      }
    });

    if(this.ssChart) {
      this.ssChart.destroy();
    }

    // create line chart
    this.ssChart = new Chart(this.ssCanvas.nativeElement, {
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
          label: "Skala Sesak", 
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
          data: datasetSkalaSesak,
          spanGaps: true,
        }
        ]
      }
    });

      })  
    });
  }
}

