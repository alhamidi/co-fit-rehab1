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
  durasi: string;
  pra_bs: string;
  pasca_bs: string;
  cd_bs: string;
  pra_sato2: string;
  pasca_sato2: string;
  cd_sato2: string;
  pra_hr: string;
  pasca_hr: string;
  cd_hr: string;
  waktu_mulai_cd: string;
  waktu_selesai_cd: string;
  durasi_cd: string;
}

@Injectable({
  providedIn: 'root'
})

export class PatientExerciseService {

  endpoint = 'https://cofitrehab-ui.org/api/patient_exercise/';
  updateEndpoint = 'https://cofitrehab-ui.org/api/patient_exercise/?type=update';
  updateLevelEndpoint = 'https://cofitrehab-ui.org/api/endurance_level/';

  httpOptions = {
    headers: new HttpHeaders()
  }

  constructor(
    private httpClient: HttpClient,
    private userdataService: UserdataService,
    ) { }

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

        this.userdataService.getCurrentExercise().then((currentExercise) => {
          if(currentExercise == 2) { // endurance exercise
            this.updateLevel(postData['id_pasien']);
          }
        })
      }, error => {
        console.log(error);
      });
      
    });
    
    return of (1);
  }

  updatePatientExercise(patientExercise: PatientExercise): Observable<any> {
    this.userdataService.getCoolingDownData().then((data) => {
      let updatedData = JSON.parse(data);
      
      updatedData['cd_bs'] = patientExercise['cd_bs'];
      updatedData['cd_sato2'] = patientExercise['cd_sato2'];
      updatedData['cd_hr'] = patientExercise['cd_hr']

      console.log("post data " + JSON.stringify(updatedData));

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

  getPatientExercises(patientId): Observable<PatientExercise[]> {
    return this.httpClient.get<PatientExercise[]>(this.endpoint + '?patient_id=' + patientId)
    .pipe(
      tap(_ => console.log(`Patient Exercises fetched patient id: ${patientId}`)),
      catchError(this.handleError<PatientExercise[]>(`Get patient exercises for patient id=${patientId}`))
      );
  }

  updateLevel(patientId): Observable<any> {
    let updateLevelData = {"id_pasien": patientId};

    console.log("update level data " + JSON.stringify(updateLevelData));

    this.httpClient.post(this.updateLevelEndpoint, JSON.stringify(updateLevelData), this.httpOptions)
    .subscribe(data => {
      console.log("Update level response data: ", data);

      this.userdataService.getEnduranceLevel().then((currentLevel) => {
        // store new endurance level
        this.userdataService.setEnduranceLevel(parseInt(data['current_endurance_level']));

        // show notification if level update
        if (data['level_up']) {
          alert("Selamat! Level latihan endurans Anda sudah meningkat");
        } else if (data['level_down']) {
          alert("Level latihan endurans Anda telah diturunkan");
        }
      });
    }, error => {
      console.log("Update level error message: ", error);
    });
    
    return of (1);
  }

  private handleResponse(response) {
    console.log("Response status " + response['status']);
    console.log("last_id " + response['last_id']);
    
    if(response['status']) {
      // store data id in local storage
      this.userdataService.remove('latest_id').then(() => {
        this.userdataService.setLatestId(response['last_id']);
        alert("Data latihan pasien berhasil disimpan");
      });
      
    } else {
      alert("Gagal menyimpan data latihan pasien ");
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
