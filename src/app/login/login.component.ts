import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { LoginService } from '../login.service';
import { ok } from 'assert';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: string;
  password: string;

  constructor(private servie: LoginService) {

  }

  login() {
    let body = {
      name: this.user,
      password: this.password
    }
    let result: any;
    this.servie.post(body).subscribe(resp => {
      result = resp.result;
      console.log(result);
    });

    if (result == null)
      alert("Datos incorrectos");
  }
}
