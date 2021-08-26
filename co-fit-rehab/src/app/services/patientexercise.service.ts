import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserdataService } from './userdata.service';
import { formatDate } from '@angular/common';


export class PatientExercise {
  _id: string;
  id_pasien: string;
  id_latihan: string;
  tanggal: string;
  waktu_mulai: string;
  waktu_selesai: string;
  pra_bs: string;
  pasca_bs: string;
  cd_bs: string;
  pra_sato2: string;
  pasca_sato2: string;
  cd_sato2: string;
  pra_hr: string;
  pasca_hr: string;
  cd_hr: string;
}

@Injectable({
  providedIn: 'root'
})

export class PatientExerciseService {

  endpoint = 'http://localhost/api/patient_exercise/';

  httpOptions = {
    headers: new HttpHeaders()
  }

  constructor(
    private httpClient: HttpClient,
    private userdataService: UserdataService,
    // private patientData: PatientExercise
  ) { }

  setCurrentExercise(data) {
    
  }

  createPatientExercise(patientExercise: PatientExercise): Observable<any> {
    var today = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');

    this.userdataService.getPatientExerciseData().then((data) => {
      let postData = JSON.parse(data);

      postData['tanggal'] = today;
      postData['pasca_hr'] = patientExercise.pasca_hr;
      postData['pasca_sato2'] = patientExercise.pasca_sato2;
      postData['pasca_bs'] = patientExercise.pasca_bs;

      console.log("post data " + JSON.stringify(postData));

      this.httpClient.post(this.endpoint, JSON.stringify(postData), this.httpOptions)
        .subscribe(data => {
          alert(data['message']);
          console.log(data);
         }, error => {
          console.log(error);
        });
      
    });
    
    // let postData = {
    //   id_pasien: 1,
    //   id_latihan: 3,
    //   tanggal: today,
    //   waktu_mulai: '2021-08-04 20:00:00',
    //   waktu_selesai: '2021-08-04 20:10:00',
    //   pra_bs: 8,
    //   pasca_bs: 7,
    //   cd_bs: 6,
    //   pra_sato2: 95,
    //   pasca_sato2: 96,
    //   cd_sato2: 95,
    //   pra_hr: 60,
    //   pasca_hr: 65,
    //   cd_hr: 60,
    // }

    
    return of (1);
  }

  updatePatientExercise(patientExercise: PatientExercise): Observable<any> {
    // var today = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    // console.log("today " + today);

    let updatedData = {
      _id_pasien: 1,
      cd_bs: 6,
      cd_sato2: 95,
      cd_hr: 60,
    }

    this.httpClient.put(this.endpoint, JSON.stringify(updatedData), this.httpOptions)
        .subscribe(data => {
          alert(data['message']);
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
