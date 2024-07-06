import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { ok } from 'assert';
import { Router } from '@angular/router';
import $, { data } from 'jquery';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private router: Router) {

  }

  Return(){
    this.router.navigate(['/Home'])
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);
  }

}
