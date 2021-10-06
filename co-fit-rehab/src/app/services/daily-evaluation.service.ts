import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { formatDate } from '@angular/common';


export class DailyEval {
  rhr: string;
}

@Injectable({
  providedIn: 'root'
})


export class DailyEvaluationService {

  // endpoint = 'https://cofitrehab-ui.org/api/daily_evaluation/';
  endpoint = 'https://localhost/api/daily_evaluation/';

  httpOptions = {
    headers: new HttpHeaders()
  }

  constructor(private httpClient: HttpClient) { }

  submitDailyEval(data: DailyEval): Observable<any> {
    var today = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    console.log("today " + today);

    let postData = {
      id_pasien: 1,
      tanggal: today,
      rhr: data['rhr']
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

  getEvaluations(patientId): Observable<DailyEval[]> {
    return this.httpClient.get<DailyEval[]>(this.endpoint + '?patient_id=' + patientId)
    .pipe(
      tap(_ => console.log(`Daily Evaluation fetched patient id: ${patientId}`)),
      catchError(this.handleError<DailyEval[]>(`Get daily evaluation patient id=${patientId}`))
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
