import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SessionService } from 'src/services/session-service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent {
  status = 'Waiting on Server!'
  constructor(private _router: Router, private _route: ActivatedRoute, private sessionService: SessionService) {
    _router.events.subscribe(
      ev => {
        if (ev instanceof NavigationEnd) {
          if (_route.queryParams) {
            localStorage.setItem('token', 'true')
            this._router.navigate([''])
          } else
            localStorage.removeItem('token')
        }
      }
    )
  }
}
