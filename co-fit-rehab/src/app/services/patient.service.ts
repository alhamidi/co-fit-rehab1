import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';


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

  constructor(private httpClient: HttpClient) { }

  login(user: Patient): Observable<any> {
    // let postData = JSON.stringify(user);

    let postData = {
      phonenumber: user.phonenumber,
      password: Md5.hashStr(user.password)
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
