import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  Thirds(){
    this.router.navigate(['/AddNewThird'])
  }

  Cathegories(){
    this.router.navigate(['/Category'])
  }

  Products(){
    this.router.navigate(['/Products'])
  }

  Solds(){
    this.router.navigate(['/Solds'])
  }

  Configurations(){
    this.router.navigate(['/Configurations'])
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);
  }
}
