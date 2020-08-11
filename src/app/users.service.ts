import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userdata } from './userdata';
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getService(): Observable<any> {
    return this.http.get(
      "http://localhost:3000/api/users"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:3000/api/users");
  }

  addUser(newUser): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/register', newUser, { headers: headers });
  }

  deleteUser(id): Observable<any> {
    return this.http.delete('http://localhost:3000/api/user/' + id);
  }

  authenticateUser(userdata): Observable<any>{
    return this.http.post('http://localhost:3000/api/authenticate', userdata);
  }

}
