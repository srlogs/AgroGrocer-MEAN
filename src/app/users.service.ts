import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdata } from './userdata';
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }
  getService(): Observable<any> {
    return this.http.get(
      "http://localhost://3000/api/users"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }

  getUsers(): Observable<any>
  {
    return this.http.get("http://localhost:3000/api/users");
  }

  addUser(newUser): Observable<any>
  {
    return this.http.post(`http://localhost://3000/api/register`, newUser);
  }
}
