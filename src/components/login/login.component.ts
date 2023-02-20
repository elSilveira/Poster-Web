import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/session-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginType = loginType;

  constructor(private _sessionService: SessionService, private _router: Router) { }

  ngOnInit(): void {
  }

  login(type: loginType) {
    switch (type) {
      case loginType.facebook:
        break;
      case loginType.google:
        break;
      case loginType.tiktok:
        break;
      case loginType.twitter:
        break;
    }
    this._sessionService.doLogin(type).subscribe(
      ev => {
        this._router.navigate([''])
      }
    )

  }
}

export enum loginType {
  google,
  facebook,
  tiktok,
  twitter
}