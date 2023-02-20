import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export var FILESKEY = 'MAIN_FS';
export enum FileType {
  'Video',
  'Image'
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  files: any;
  constructor(private http: HttpClient) {
    this.getFiles(FileType.Video)
  }

  getFiles(type: FileType) {
    let items = localStorage.getItem(FILESKEY);
    if (!items) return []
    this.files = JSON.parse(items ?? '');
    return this.files;
  }

  saveLocally(file: { file: File, name: string }, type: FileType) {
    return this.http.post('http://127.0.0.1:3000/add', file.file)
  }

  saveFiles(files: File[], path: string) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`file${i}`, files[i]);
    }

    return this.http.post(`api/upload/${path}`, formData);
  }

  xsaveVideo(file: any) {
    const formData = {
      'path': file.path,
      'title': file.title,
      'description': file.description,
      'thumbnail': file.thumbnail,
      'tags': file.tags
    };
    let head = new HttpHeaders();
    head.append("Content-Type", "application/json")
    return this.http.post('http://127.0.0.1:3000/post', formData, { headers: head })
  }

  private readonly chunkSize = 1024 * 1024 * 5; // 5 MB
  async saveVideo(file: File): Promise<any> {
    const chunkCount = Math.ceil(file.size / this.chunkSize);
    for (let i = 0; i < chunkCount; i++) {
      const start = i * this.chunkSize;
      const end = (i + 1) * this.chunkSize >= file.size ? file.size : (i + 1) * this.chunkSize;
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('chunkIndex', i.toString());
      formData.append('chunkCount', chunkCount.toString());
      formData.append('fileName', file.name);
      const request = new HttpRequest('POST', 'http://127.0.0.1:3000/post', formData, {
        reportProgress: true,
      });
      const response = await this.http.request(request).toPromise();
      if (response?.type === HttpEventType.Response) {
        console.log(response?.body);
      }
    }
  }
}
