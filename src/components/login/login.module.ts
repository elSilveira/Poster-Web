import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SessionService } from "src/services/session-service";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [LoginComponent],
  providers: [SessionService],
})
export class LoginModule { }
