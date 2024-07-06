import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThirdsService {

  private API = "http://localhost:15141/third/";

  constructor(private http: HttpClient) {
  }

  private setHeaders() {
    let headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('accept', '*/*')
      .append('ApiVersion', '1.1');
    return headers;
  }

  public post(body: any): Observable<any> {
    return this.http.post(this.API + "Save", body, {
      headers: this.setHeaders()
    });
  }

  public getThirdType(): Observable<any> {
    return this.http.get(this.API + "Type", {
      headers: this.setHeaders()
    });
  }

  public getDocumentType(): Observable<any> {
    return this.http.get(this.API + "Document", {
      headers: this.setHeaders()
    });
  }

  public AllThirds(body: any): Observable<any> {
    return this.http.post(this.API + "AllThirds", body, {
      headers: this.setHeaders()
    });
  }
}
