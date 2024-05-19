import { Component } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-add-new-third',
  standalone: true,
  imports: [],
  templateUrl: './add-new-third.component.html',
  styleUrl: './add-new-third.component.css'
})
export class AddNewThirdComponent {
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('userValid') == null)
      this.router.navigate(['../']);


    $("#CrearTercero").css("display", "none");
    $("#Consultar").css("display", "none");

    $("#Crear").on("click", function(){
      $("#CrearTercero").css("display", "inline-block");
      $("#Consultar").css("display", "none");
    });
  
    $("#ConsultarTercero").on("click", function(){
      $("#CrearTercero").css("display", "none");
      $("#Consultar").css("display", "inline-block");
    });
  }

}
