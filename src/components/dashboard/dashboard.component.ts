import { Component, OnInit } from '@angular/core';
import { itemsList, postedItems } from 'src/models/item';
import { SessionService } from 'src/services/session-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showInsert = true;
  status = this.sessionService?.isLogged;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  openLogin(url: string) {
    window.open(url, `_self`)
  }

  checkStatus() { return true }
  //   this.sessionService.doLogin(null).subscribe
  //     (
  //       (success: any) => {
  //         if (success.authUrl) {
  //           this.openLogin(success.authUrl)
  //         }
  //         console.log("Logged", success)
  //       },
  //       error => {
  //         console.log("Error on Login", error)
  //       },
  //       () => {
  //         console.log("Login Event Finish.")
  //       }
  //     )
  // }

  itemsList = itemsList;
  postedList = postedItems;
}
