import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { CompleteAuthComponent } from 'src/components/shared/completeauth.component';
import { MyAuthGuard } from 'src/services/my-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [MyAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'channel/auth',
    component: CompleteAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
