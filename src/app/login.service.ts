import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_Login = "http://localhost:15141/Authority/Auth";

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
    return this.http.post(this.API_Login, body, {
      headers: this.setHeaders()
    });
  }
}
