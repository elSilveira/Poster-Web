import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/services/accounts-service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: any;
  loading = false;
  showNew = false;
  account: any = {};
  constructor(private accountsService: AccountsService) {
    this.accountsService.getAccounts().subscribe(
      ev => { this.accounts = ev }
    )
  }
  ngOnInit(): void {
  }
  salvar() {
    this.loading = true;
    if (this.account.nome && this.account.descricao) {
      this.accountsService.addAccount(this.account).
        subscribe((ev: any) => {
          this.loading = false;
          this.showNew = false;
          this.accountsService.getAccounts().subscribe(
            ev => { this.accounts = ev }
          )
        });
    }
  }
  cancelar() {
    this.showNew = false;
  }
}
