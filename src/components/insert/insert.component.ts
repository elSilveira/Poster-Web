import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/services/file-upload-service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  titulo = '';
  mainfolder = '';
  descricao = '';
  thumbPath = '';
  filePath = '';
  tags = '';
  privacyStatus = 'Private';
  schedule: any;
  file: any = {};
  thumb: any = {};
  facebookSelected = false;
  instagramSelected = false;
  youtubeSelected = true;
  tiktokSelected = false;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  save() {
    let sfile: any = {};
    sfile.path = this.mainfolder;
    sfile.description = this.descricao;
    sfile.thumbnail = this.thumb;
    sfile.tags = this.tags;
    sfile.title = this.titulo;
    sfile.privacyStatus = this.privacyStatus;
    sfile.data = this.file;
    console.log(sfile)
    this.fileUploadService.saveVideo(sfile).then(
      ev => {
        console.log(ev)
      }
    )
  }

  changeFolder(event: any) {
    localStorage.setItem(FOLDERKEY, event.target.value)
  }

  onuploadthumb = (event: any) => {
    let tfile = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(tfile);
    reader.onload = () => {
      this.thumb = reader.result;
    };

  }

  async onuploadfile(event: any) {
    let ufile = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(ufile);
    reader.onload = () => {
      this.file = reader.result;
    };
  }
}
export var FOLDERKEY = 'MAIN_F';
