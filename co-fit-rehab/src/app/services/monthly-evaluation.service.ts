import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { formatDate } from '@angular/common';


export class MonthlyEval {
  uji_jalan: string;
  kualitas_hidup: string;
  skala_sesak: string;
  darah: string;
}

@Injectable({
  providedIn: 'root'
})


export class MonthlyEvaluationService {

  endpoint = 'https://localhost/api/monthly_evaluation/';

  httpOptions = {
    headers: new HttpHeaders()
  }

  constructor(private httpClient: HttpClient) { }

  submitMonthlyEval(data: MonthlyEval): Observable<any> {
    var today = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    console.log("today " + today);

    let postData = {
      id_pasien: 1,
      tanggal: today,
      uji_jalan: data['uji_jalan'],
      kualitas_hidup: data['kualitas_hidup'],
      skala_sesak: data['skala_sesak'],
      darah: data['darah'],
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

  getEvaluations(patientId): Observable<MonthlyEval[]> {
    return this.httpClient.get<MonthlyEval[]>(this.endpoint + '?patient_id=' + patientId)
      .pipe(
        tap(_ => console.log(`Monthly Evaluation fetched patient id: ${patientId}`)),
        catchError(this.handleError<MonthlyEval[]>(`Get monthly evaluation patient id=${patientId}`))
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
