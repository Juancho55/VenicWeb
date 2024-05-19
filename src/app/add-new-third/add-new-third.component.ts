import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-add-new-third',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-third.component.html',
  styleUrl: './add-new-third.component.css'
})
export class AddNewThirdComponent {

  thirdType: number;
  firtsName: string;
  secondName: string;
  firtsSurName: string;
  secondSurName: string;
  bussinesName: string;
  documentType: number;
  documentNumber :string;
  genderType:number;
  birthdayDate: Date;
  legalDate: Date;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);


    $("#CrearTercero").css("display", "none");
    $("#Consultar").css("display", "none");

    $("#Crear").on("click", function () {
      $("#CrearTercero").css("display", "inline-flex");
      $("#Consultar").css("display", "none");
    });

    $("#ConsultarTercero").on("click", function () {
      $("#CrearTercero").css("display", "none");
      $("#Consultar").css("display", "inline-flex");
    });
  }

}
