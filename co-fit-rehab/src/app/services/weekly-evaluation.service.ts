import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {formatDate} from '@angular/common';
import { UserdataService } from './userdata.service';


export class WeeklyEval {
  rhr: string;
  bfi: string;
  sts30detik: string;
}

@Injectable({
  providedIn: 'root'
})


export class WeeklyEvaluationService {

  endpoint = 'https://localhost/api/weekly_evaluation/';

  httpOptions = {
    headers: new HttpHeaders()
  }

  constructor(
    private httpClient: HttpClient,
    private userdataService: UserdataService,
  ) { }

  submitWeeklyEval(data: WeeklyEval): Observable<any> {
    var today = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    console.log("today " + today);

    this.userdataService.getPatientId().then((patientId) => {
      let postData = {
        id_pasien: patientId,
        tanggal: today,
        rhr: data['rhr'],
        bfi: data['bfi'],
        sts30detik: data['sts30detik']
      }

      console.log("**** " + JSON.stringify(postData));

      this.httpClient.post(this.endpoint, JSON.stringify(postData), this.httpOptions)
        .subscribe(data => {
          console.log(data);
         }, error => {
          console.log(error);
        });
      return of (1);
    });

    return of (1);
  }

  getEvaluations(patientId): Observable<WeeklyEval[]> {
    return this.httpClient.get<WeeklyEval[]>(this.endpoint + '?patient_id=' + patientId)
      .pipe(
        tap(_ => console.log(`Weekly Evaluation fetched patient id: ${patientId}`)),
        catchError(this.handleError<WeeklyEval[]>(`Get weekly evaluation patient id=${patientId}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
