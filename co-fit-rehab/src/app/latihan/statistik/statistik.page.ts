  import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

  import { PatientExerciseService } from './../../services/patientexercise.service';
  import { UserdataService } from './../../services/userdata.service';
  import { Router } from '@angular/router';
  import { formatDate } from '@angular/common';

  import { Chart, registerables  } from "chart.js";

  @Component({
    selector: 'app-statistik',
    templateUrl: './statistik.page.html',
    styleUrls: ['./statistik.page.scss'],
  })

  export class StatistikPage implements OnInit {

    // breathing
    @ViewChild("hrBreathingCanvas") hrBreathingCanvas: ElementRef;
    @ViewChild("sato2BreathingCanvas") sato2BreathingCanvas: ElementRef;
    @ViewChild("sbBreathingCanvas") sbBreathingCanvas: ElementRef;

    // endurance
    @ViewChild("hrEnduranceCanvas") hrEnduranceCanvas: ElementRef;
    @ViewChild("sato2EnduranceCanvas") sato2EnduranceCanvas: ElementRef;
    @ViewChild("sbEnduranceCanvas") sbEnduranceCanvas: ElementRef;

    // strength
    @ViewChild("hrStrengthCanvas") hrStrengthCanvas: ElementRef;
    @ViewChild("sato2StrengthCanvas") sato2StrengthCanvas: ElementRef;
    @ViewChild("sbStrengthCanvas") sbStrengthCanvas: ElementRef;

    Exercises: any = [];

    // breathing
    private hrBreathingChart: Chart;
    private sato2BreathingChart: Chart;
    private sbBreathingChart: Chart;

    // endurance
    private hrEnduranceChart: Chart;
    private sato2EnduranceChart: Chart;
    private sbEnduranceChart: Chart;

    // strength
    private hrStrengthChart: Chart;
    private sato2StrengthChart: Chart;
    private sbStrengthChart: Chart;
    
    constructor(
      private patientExerciseService: PatientExerciseService,
      private userdataService: UserdataService,
      private router: Router
      ) { Chart.register(...registerables); }

    ngOnInit() {
    }

    ionViewDidEnter() {
      var breathingLabels = [];
      var enduranceLabels = [];
      var strengthLabels = [];

      // breathing
      var datasetPraHRBreathing = [];
      var datasetPascaHRBreathing = [];
      var datasetPraSBBreathing = [];
      var datasetPascaSBBreathing = [];
      var datasetPraSatO2Breathing = [];
      var datasetPascaSatO2Breathing = [];

      // endurance
      var datasetPraHREndurance = [];
      var datasetPascaHREndurance = [];
      var datasetPraSBEndurance = [];
      var datasetPascaSBEndurance = [];
      var datasetPraSatO2Endurance = [];
      var datasetPascaSatO2Endurance = [];

      // strength
      var datasetPraHRStrength = [];
      var datasetPascaHRStrength = [];
      var datasetPraSBStrength = [];
      var datasetPascaSBStrength = [];
      var datasetPraSatO2Strength = [];
      var datasetPascaSatO2Strength = [];

      this.userdataService.getPatientId().then((patientId) => {
        this.patientExerciseService.getPatientExercises(patientId).subscribe((response) => {
          this.Exercises = response;

          console.log(response);

          // iterate response, construct labels and the datasets
          // process breathing data
          response['data']['breathing'].forEach((item) => {
            let date = new Date(item['tanggal']);
            var formattedDate = formatDate(date, 'dd MMM', 'en');
            breathingLabels.push(formattedDate);
            datasetPraHRBreathing.push(item['pra_hr']);
            datasetPascaHRBreathing.push(item['pasca_hr']);
            datasetPraSatO2Breathing.push(item['pra_sato2']);
            datasetPascaSatO2Breathing.push(item['pasca_sato2']);
            datasetPraSBBreathing.push(item['pra_bs']);
            datasetPascaSBBreathing.push(item['pasca_bs']);
          });

          // process endurance data
          response['data']['endurance'].forEach((item) => {
            let date = new Date(item['tanggal']);
            var formattedDate = formatDate(date, 'dd MMM', 'en');
            enduranceLabels.push(formattedDate);
            datasetPraHREndurance.push(item['pra_hr']);
            datasetPascaHREndurance.push(item['pasca_hr']);
            datasetPraSatO2Endurance.push(item['pra_sato2']);
            datasetPascaSatO2Endurance.push(item['pasca_sato2']);
            datasetPraSBEndurance.push(item['pra_bs']);
            datasetPascaSBEndurance.push(item['pasca_bs']);
          });

          // process strength data
          response['data']['strength'].forEach((item) => {
            let date = new Date(item['tanggal']);
            var formattedDate = formatDate(date, 'dd MMM', 'en');
            strengthLabels.push(formattedDate);
            datasetPraHRStrength.push(item['pra_hr']);
            datasetPascaHRStrength.push(item['pasca_hr']);
            datasetPraSatO2Strength.push(item['pra_sato2']);
            datasetPascaSatO2Strength.push(item['pasca_sato2']);
            datasetPraSBStrength.push(item['pra_bs']);
            datasetPascaSBStrength.push(item['pasca_bs']);
          });

          // generate breathing chart
          if(this.hrBreathingChart) {
            this.hrBreathingChart.destroy();
          }

          this.hrBreathingChart = new Chart(this.hrBreathingCanvas.nativeElement, {
            type: "line",
            data: {
              labels: breathingLabels,
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
            data: datasetPraHRBreathing,
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
            data: datasetPascaHRBreathing,
            spanGaps: false,
          }
          ]
        }
      });

          if(this.sato2BreathingChart) {
            this.sato2BreathingChart.destroy();
          }

          // create line chart
          this.sato2BreathingChart = new Chart(this.sato2BreathingCanvas.nativeElement, {
            type: "line",
            data: {
              labels: breathingLabels,
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
            data: datasetPraSatO2Breathing,
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
            data: datasetPascaSatO2Breathing,
            spanGaps: false,
          }
          ]
        }
      });

          if(this.sbBreathingChart) {
            this.sbBreathingChart.destroy();
          }

          // create line chart
          this.sbBreathingChart = new Chart(this.sbBreathingCanvas.nativeElement, {
            type: "line",
            data: {
              labels: breathingLabels,
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
            data: datasetPraSBBreathing,
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
            data: datasetPascaSBBreathing,
            spanGaps: false,
          }
          ]
        }
      });

          // generate endurance chart
          if(this.hrEnduranceChart) {
            this.hrEnduranceChart.destroy();
          }

          this.hrEnduranceChart = new Chart(this.hrEnduranceCanvas.nativeElement, {
            type: "line",
            data: {
              labels: enduranceLabels,
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
            data: datasetPraHREndurance,
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
            data: datasetPascaHREndurance,
            spanGaps: false,
          }
          ]
        }
      });

          if(this.sato2EnduranceChart) {
            this.sato2EnduranceChart.destroy();
          }

          // create line chart
          this.sato2EnduranceChart = new Chart(this.sato2EnduranceCanvas.nativeElement, {
            type: "line",
            data: {
              labels: enduranceLabels,
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
            data: datasetPraSatO2Endurance,
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
            data: datasetPascaSatO2Endurance,
            spanGaps: false,
          }
          ]
        }
      });

          if(this.sbEnduranceChart) {
            this.sbEnduranceChart.destroy();
          }

          // create line chart
          this.sbEnduranceChart = new Chart(this.sbEnduranceCanvas.nativeElement, {
            type: "line",
            data: {
              labels: enduranceLabels,
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
            data: datasetPraSBEndurance,
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
            data: datasetPascaSBEndurance,
            spanGaps: false,
          }
          ]
        }
      });

          // generate strength chart
          if(this.hrStrengthChart) {
            this.hrStrengthChart.destroy();
          }

          this.hrStrengthChart = new Chart(this.hrStrengthCanvas.nativeElement, {
            type: "line",
            data: {
              labels: strengthLabels,
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
            data: datasetPraHRStrength,
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
            data: datasetPascaHRStrength,
            spanGaps: false,
          }
          ]
        }
      });

          if(this.sato2StrengthChart) {
            this.sato2StrengthChart.destroy();
          }

          // create line chart
          this.sato2StrengthChart = new Chart(this.sato2StrengthCanvas.nativeElement, {
            type: "line",
            data: {
              labels: strengthLabels,
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
            data: datasetPraSatO2Strength,
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
            data: datasetPascaSatO2Strength,
            spanGaps: false,
          }
          ]
        }
      });

          if(this.sbStrengthChart) {
            this.sbStrengthChart.destroy();
          }

          // create line chart
          this.sbStrengthChart = new Chart(this.sbStrengthCanvas.nativeElement, {
            type: "line",
            data: {
              labels: strengthLabels,
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
            data: datasetPraSBStrength,
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
            data: datasetPascaSBStrength,
            spanGaps: false,
          }
          ]
        }
      });



        });
});
}
}
