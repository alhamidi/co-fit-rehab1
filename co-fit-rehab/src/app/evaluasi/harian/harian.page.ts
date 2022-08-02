import { Component, OnInit, Inject, NgZone, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { formatDate } from '@angular/common';

import { DailyEvaluationService } from './../../services/daily-evaluation.service';
import { UserdataService } from './../../services/userdata.service';

import { Chart, registerables  } from "chart.js";

@Component({
  selector: 'app-harian',
  templateUrl: './harian.page.html',
  styleUrls: ['./harian.page.scss'],
})

export class HarianPage implements OnInit {
  @ViewChild("rhrCanvas") rhrCanvas: ElementRef;

  Evaluation: any = [];

  private rhrChart: Chart;
  
  constructor(
    private evalService: DailyEvaluationService,
    private userdataService: UserdataService,
    private router: Router
  ) { Chart.register(...registerables); }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var labels = [];
    var datasetRhr = [];
    
    this.userdataService.getPatientId().then((patientId) => {
      this.evalService.getEvaluations(patientId).subscribe((response) => {
        this.Evaluation = response;
        console.log('**response ' + this.Evaluation);

        response['data'].forEach((item) => {
          let date = new Date(item['tanggal']);
          var formattedDate = formatDate(date, 'dd MMM', 'en');
          labels.push(formattedDate);
          datasetRhr.push(item['rhr']);
        });

    if(this.rhrChart) {
      this.rhrChart.destroy();
    }

    // create line chart
    this.rhrChart = new Chart(this.rhrCanvas.nativeElement, {
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
          label: "Denyut Jantung Istirahat", 
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
          data: datasetRhr,
          spanGaps: true,
        }
        ]
      }
    });

      })  
    });
  }
}

