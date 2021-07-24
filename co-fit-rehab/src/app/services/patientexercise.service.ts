import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class PatientExercise {
  _id: string;
  id_pasien: string;
  id_latihan: string;
  tanggal: string;
  waktu_mulai: string;
  waktu_selesai: string;
  pra_bs: string;
  pasca_bs: string;
  pra_sato2: string;
  pasca_sato2: string;
  pra_hr: string;
  pasca_hr: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientExerciseService {

  endpoint = 'http://localhost/api/patient_exercise/';

  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  createPatientExercise(user: PatientExercise): Observable<any> {
    return this.httpClient.post<PatientExercise>(this.endpoint, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<PatientExercise>('Error occured'))
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
