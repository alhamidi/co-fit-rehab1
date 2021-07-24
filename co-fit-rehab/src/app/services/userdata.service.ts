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

export class UserDataService {

  endpoint = 'https://localhost/api/exercise/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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



/*
export class User {
  _id: number;
  name: string;
  email: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {

  endpoint = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Error occured'))
      );
  }

  getUser(id): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<User[]>(`Get user id=${id}`))
      );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<User[]>('Get user', []))
      );
  }

  updateUser(id, user: User): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<User[]>('Update user'))
      );
  }

  deleteUser(id): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<User[]>('Delete user'))
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
*/