import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';
import { Router } from '@angular/router';

import { UserdataService } from './userdata.service';


export class Patient {
  phonenumber: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})


export class PatientService {

  endpoint = 'https://localhost/api/patient/';

  httpOptions = {
    headers: new HttpHeaders()
  }

  constructor(
    private httpClient: HttpClient,
    private userdataService: UserdataService,
    private router: Router
    ) { }

  login(user: Patient): Observable<any> {

    let postData = {
      phonenumber: user.phonenumber,
      password: Md5.hashStr(user.password)
    }

    this.httpClient.post(this.endpoint, JSON.stringify(postData), this.httpOptions)
    .subscribe(data => {
      console.log(data["data"][0]);
      this.router.navigate(['/menu/latihan']);
      this.storePatientData(data["data"][0]);
    }, error => {
      console.log("Login Error: " + error.status);
      if (error.status == 404) {
        alert("User tidak ditemukan");
      } else {
        alert("Terjadi gangguan sistem. Silakan coba kembali");
      }
    });
    return of (1);
  }

  storePatientData(data) {
    this.userdataService.setPatientData(data["id"], data["nama"], data["endurance_level"]);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
