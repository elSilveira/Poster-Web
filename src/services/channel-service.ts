
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mainUrl } from './session-service';
@Injectable()

export class ChannelService {
  constructor(private _http: HttpClient) { }
  addChannel(channel: any) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this._http.post(mainUrl + '/channel', channel).pipe()

  }
  getChannelsByAccount(accountId: any) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this._http.get(mainUrl + `/channel/${accountId}`).pipe()
  }

  authenticate(channelId: any) {
    return this._http.get(mainUrl + `/channel/auth/${channelId}`).pipe()
  }

  completeAuth(code: any, id: any, scope: any) {
    return this._http.get(mainUrl + `/channel/auth`, { params: { id: id, code: code, scope: scope } })
  }
}