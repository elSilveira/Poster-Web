
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export var AUTHKEY = 'MAIN_AUT';
export const mainUrl = 'http://127.0.0.1:3000';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  get isLogged() { return localStorage.getItem('session') != null; }
  constructor(private http: HttpClient) { }

  getToken() {
    let res = localStorage.getItem('session')
    return res ? JSON.parse(res)['token'] : null;
  }
  
  doLogin(user: any) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.http.post(mainUrl + '/login', user, { headers: header }).pipe(
      tap(
        (ev: any) => {
          localStorage.setItem('session', JSON.stringify(ev))
        },
        err => {
          console.log(err)
        },
        () => { }
      )
    );
  }

  finishLogin(code: any) {
    return this.http.put(mainUrl + '/continue', code).pipe
      (
        tap(
          (ev: any) => {
            localStorage.setItem('token', 'true')
          },
          err => {
            localStorage.removeItem('token')
          })
      )

  }

}