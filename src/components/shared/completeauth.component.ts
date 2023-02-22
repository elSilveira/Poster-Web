import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChannelService } from 'src/services/channel-service';

@Component({
  template: '',
})
export class CompleteAuthComponent {
  constructor(private _router: Router, private _route: ActivatedRoute,
    private _channelService: ChannelService) {
    _router.events.subscribe(
      ev => {
        if (ev instanceof NavigationEnd) {
          if (_route.queryParams) {
            console.log(_route.params)
            _route.queryParams.subscribe(
              (params: any) => {
                this._channelService.completeAuth(params.code, params.id, params.scope).subscribe(
                  (res: any) => {
                    this._router.navigate([''])
                  }, 
                  (err: any) => {
                    this._router.navigate([''])
                  }
                )
              }
            )


          }
        }
      })
  }

}
