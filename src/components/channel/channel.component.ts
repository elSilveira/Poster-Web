import { Component, Input, OnInit } from '@angular/core';
import { ChannelService } from 'src/services/channel-service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  showNew = false;
  loading = false;
  _account: any;
  @Input()
  set account(ev: any) {
    this._account = ev;
    if (ev.id)
      this._channelService.getChannelsByAccount(ev.id).subscribe(
        ev => { this.channels = ev; }
      )
  }
  channels: any;
  newChannel: any = {};

  constructor(private _channelService: ChannelService) {
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.showNew = false
    this.newChannel = {};
  }

  salvar() {
    this.loading = true;
    if (this.newChannel.nome) {
      let newObj: any = {};
      newObj.accountId = this._account.id;
      newObj.channel = this.newChannel;
      this._channelService.addChannel(newObj).
        subscribe((ev: any) => {
          this._channelService.getChannelsByAccount(this._account.id).subscribe(
            ev => {
              this.channels = ev;
              this.loading = false;
              this.showNew = false;
            }
          )
        });
    }
  }
  authenticate(channel: any) {
    this._channelService.authenticate(channel.channel_id).subscribe
      (
        (ev: any) => {
          if (ev) {
            window.open(ev.url, '_self')
          }
        }
      );
  }
}
