import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export class Patient {
  username: string;
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
    let postData = JSON.stringify(user);

    this.httpClient.post(this.endpoint, postData, this.httpOptions)
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
