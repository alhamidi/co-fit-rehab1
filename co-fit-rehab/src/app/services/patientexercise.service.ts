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
    headers: new HttpHeaders()
  }

  constructor(private httpClient: HttpClient) { }

  createPatientExercise(patientExercise: PatientExercise): Observable<any> {

    let postData = {
      id_pasien: 1,
      id_latihan: 3,
      tanggal: '2021-08-04',
      waktu_mulai: '2021-08-04 20:00:00',
      waktu_selesai: '2021-08-04 20:10:00',
      pra_bs: 8,
      pasca_bs: 7,
      pra_sato2: 95,
      pasca_sato2: 96,
      pra_hr: 60,
      pasca_hr: 65,
    }

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
