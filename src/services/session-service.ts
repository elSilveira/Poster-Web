
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export var AUTHKEY = 'MAIN_AUT';
const mainUrl = 'http://127.0.0.1:3000';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  get isLogged() { return localStorage.getItem('token') != null; }
  constructor(private http: HttpClient) { }

  doLogin(auth: any) {
    localStorage.setItem('token', 'true');
    return new Observable(ev => ev.next(true));
    // return this.http.get(mainUrl + '/login')
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