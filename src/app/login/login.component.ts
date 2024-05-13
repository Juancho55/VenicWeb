import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { LoginService } from '../login.service';
import { ok } from 'assert';
import { Router } from '@angular/router';

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

  constructor(private servie: LoginService, private router: Router) {

  }

  login() {
    let body = {
      name: this.user,
      password: this.password
    }
    let result: any;
    this.servie.post(body).subscribe(resp => {
      result = resp.id_User;
      if (result == 0)
        alert("El usuario no existe");
      else
      {
        sessionStorage.setItem("userValid", JSON.stringify(resp));
        this.router.navigate(['/Home']);
      }

    });
  }
}
