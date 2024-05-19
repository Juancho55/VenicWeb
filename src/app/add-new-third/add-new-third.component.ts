import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { ThirdsService } from '../Services/thirds.service';
import { ok } from 'assert';
import { Router } from '@angular/router';
import $, { data } from 'jquery';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-new-third',
  standalone: true,
  imports: [FormsModule, NgForOf],
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
  documentNumber: string;
  genderType: number;
  birthdayDate: Date;
  legalDate: Date;
  thirdTypes: Array<any>;
  Documents: Array<any>;



  constructor(private service: ThirdsService, private router: Router) {

  }

  Return(){
    this.router.navigate(['/Home'])
  }

  save() {
    let savePerson = {
      id: 0,
      firstName: this.firtsName,
      secondName: this.secondName,
      firstSurName: this.firtsSurName,
      secondSurName: this.secondSurName,
      comercialName: this.bussinesName,
      documentTypeId: this.documentType,
      documentNumber: this.documentNumber,
      thirdTypeId: this.thirdType,
      genderId: this.genderType,
      birthDay: this.birthdayDate,
      legalDate: this.legalDate,
      active: true
    }

    console.log(savePerson);

    this.service.post(savePerson).subscribe(resp => {
      if (resp) {
        alert("Se guardo el tercero.");
        this.firtsName = "";
        this.secondName = "";
        this.firtsSurName = "";
        this.secondSurName = "";
        this.bussinesName = "";
        this.documentType = 0;
        this.documentNumber = "";
        this.thirdType = 0;
        this.genderType = 0;
        this.birthdayDate = new Date;
        this.legalDate = new Date;
      }
      else
        alert("Hay un error al guardar ontatar el admin");
    })
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);

    this.thirdType = 0;
    this.documentType = 0;
    this.genderType = 0;

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

    $("#thirdTypeId").on("change", function () {
      if ($("#thirdTypeId").val() == 10) {
        ThirdBussines("inline-block");
        Third("none");
      }
      else {
        ThirdBussines("none");
        Third("inline-block")
      }
    });

    function ThirdBussines(action: string) {
      $("#bussinesName").css("display", action);
      $("#legalDate").css("display", action);
    }

    function Third(action: string) {
      $("#firtsName").css("display", action);
      $("#secondName").css("display", action);
      $("#firtsSurName").css("display", action);
      $("#secondSurName").css("display", action);
      $("#genderType").css("display", action);
      $("#birthdayDate").css("display", action);
    }

    this.service.getThirdType().subscribe(resp => {
      if (resp != null) {
        this.thirdTypes = resp;
      }
    });

    this.service.getDocumentType().subscribe(resp => {
      if (resp != null) {
        this.Documents = resp;
      }
    });
  }
}
