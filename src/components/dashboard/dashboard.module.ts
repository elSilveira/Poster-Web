import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FileUploadService } from 'src/services/file-upload-service';
import { InsertComponent } from '../insert/insert.component';
import { ListComponent } from '../list/list.component';
import { PostCardComponent } from '../video-card/post-card.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    InsertComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FileUploadService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
