import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {formatDate} from '@angular/common';


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

  constructor(private httpClient: HttpClient) { }

  submitWeeklyEval(data: WeeklyEval): Observable<any> {
    var today = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    console.log("today " + today);

    let postData = {
      id_pasien: 1,
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
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
