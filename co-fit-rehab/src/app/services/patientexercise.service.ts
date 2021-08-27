import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserdataService } from './userdata.service';
import { formatDate } from '@angular/common';


export class PatientExercise {
  id: string;
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
  updateEndpoint = 'http://localhost/api/patient_exercise/?type=update';

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
          this.handleResponse(data);
          console.log(data);
         }, error => {
          console.log(error);
        });
      
    });
    
    return of (1);
  }

  updatePatientExercise(patientExercise: PatientExercise): Observable<any> {
    this.userdataService.getLatestId().then((latestId) => {
      let updatedData = {
        id: latestId,
        cd_bs: patientExercise['cd_hr'],
        cd_sato2: patientExercise['cd_sato2'],
        cd_hr: patientExercise['cd_hr'],
      }

      alert(JSON.stringify(updatedData));

      this.httpClient.post(this.updateEndpoint, JSON.stringify(updatedData), this.httpOptions)
        .subscribe(data => {
          alert("Data latihan pasien berhasil simpan");
          console.log(data);
         }, error => {
          console.log(error);
        });
    });
    return of (1);
  }

  private handleResponse(response) {
    if(response['status']) {
      // store data id in local storage
      this.userdataService.setLatestId(response['last_id']);

      alert("Data latihan pasien berhasil disimpan");
    } else {
      alert("Gagal menyimpan data latihan pasien");
    }
  }
    
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

}
