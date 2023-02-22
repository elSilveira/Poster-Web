
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mainUrl } from './session-service';
@Injectable()

export class AccountsService {
  constructor(private _http: HttpClient) { }
  addAccount(account: any) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this._http.post(mainUrl + '/account', account).pipe()
  }

  getAccounts(populate=false) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this._http.get(mainUrl + `/account?populate=${populate}`).pipe()
  }
}