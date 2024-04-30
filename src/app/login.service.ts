import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_Login = "http://localhost:15141/Authority/Auth";

  constructor(private http: HttpClient) { 
  }

  public post(body : any): Observable<any>{
    return this.http.post(this.API_Login, body);
  }
}
