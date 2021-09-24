import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export class Exercise {
  _id: string;
  nama: string;
  tipe: string;
  deskripsi: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {

  endpoint = 'https://cofitrehab-ui.org/api/exercise/';

  httpOptions = {
    headers: new HttpHeaders()
  };

  constructor(private httpClient: HttpClient) { }

  getExercise(id): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>(this.endpoint + '?id=' + id)
    .pipe(
      tap(_ => console.log(`Exercise fetched id: ${id}`)),
      catchError(this.handleError<Exercise[]>(`Get exercise id=${id}`))
      );
  }

  getExercises(type): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>(this.endpoint + '?type=' + type)
    .pipe(
      tap(_ => console.log(`Exercises fetched type: ${type}`)),
      catchError(this.handleError<Exercise[]>(`Get exercise type=${type}`))
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

