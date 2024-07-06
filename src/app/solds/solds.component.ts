import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { ok } from 'assert';
import { Router } from '@angular/router';
import $, { data } from 'jquery';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-solds',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './solds.component.html',
  styleUrl: './solds.component.css'
})
export class SoldsComponent {

  constructor(private router: Router) {

  }

  Return() {
    this.router.navigate(['/Home'])
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);
  }

}
