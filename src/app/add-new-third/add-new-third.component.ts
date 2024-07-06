import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { ThirdsService } from '../Services/thirds.service';
import { ok } from 'assert';
import { Router } from '@angular/router';
import $, { data } from 'jquery';
import { NgForOf } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import test from 'node:test';

@Component({
  selector: 'app-add-new-third',
  standalone: true,
  imports: [FormsModule, NgForOf, MatTableModule, MatTable],
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
  thirdsData: Persons[];

  columnas: string[] = ['Id', 'Primer Nombre', 'Segundo Nombre', 'Primer Apellido',
    'Segundo Apellido', 'Nombre Comercial', 'Tipo doumento Id', 'Numero documento', 'Tipo tercero Id',
    'Genero Id', 'Fecha Nacimiento', 'Fecha Constitucion', 'Activo', 'borrar'];

  articuloselect: Persons = new Persons(0, "", "", "", "", "", 0, "", 0, 0, new Date(), new Date(), true);

  constructor(private service: ThirdsService, private router: Router) {

  }

  Return() {
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

  @ViewChild(MatTable) tabla1!: MatTable<Persons>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.thirdsData.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }


  ngOnInit(): void {
    if (sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);

    let getPersons = {
      id: 0,
      firstName: this.firtsName,
      secondName: this.secondName,
      firstSurName: this.firtsSurName,
      secondSurName: this.secondSurName,
      comercialName: this.bussinesName,
      documentTypeId: this.documentType,
      documentNumber: this.documentNumber,
      thirdTypeId: 10,
      genderId: this.genderType,
      birthDay: this.birthdayDate,
      legalDate: this.legalDate,
      active: true
    }

    this.service.AllThirds(getPersons).subscribe(resp => {
      if (resp != null) {
        this.thirdsData = resp;
      }
      else
        alert("No hay información cargada");
    })

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

export class Persons {
  constructor(
    id: number,
    firstName: string,
    secondName: string,
    firstSurName: string,
    secondSurName: string,
    comercialName: string,
    documentTypeId: number,
    documentNumber: string,
    thirdTypeId: number,
    genderId: number,
    birthDay: Date,
    legalDate: Date,
    active: boolean) {
  }
}
