import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { ok } from 'assert';
import { Router } from '@angular/router';
import $, { data } from 'jquery';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cathegories',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './cathegories.component.html',
  styleUrl: './cathegories.component.css'
})
export class CathegoriesComponent {

  constructor(private router: Router) {

  }

  Return(){
    this.router.navigate(['/Home'])
  }

}
