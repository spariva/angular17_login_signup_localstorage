// Importamos los módulos necesarios de Angular
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'; // Importamos FormGroup y FormControl
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent { // Implementamos OnInit

  loggedUser: any;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  guardarPeticion() {
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const apellido = (<HTMLInputElement>document.getElementById('apellido')).value;
    const correo = (<HTMLInputElement>document.getElementById('correo')).value;
    const tipoDeConsulta = (<HTMLInputElement>document.getElementById('tipoDeConsulta')).value;
    const mensaje = (<HTMLInputElement>document.getElementById('mensaje')).value;
  
    const nuevaPeticion = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      tipoDeConsulta: tipoDeConsulta,
      mensaje: mensaje
    };
  
    // Recuperar peticiones existentes
    let peticionesGuardadas = localStorage.getItem('peticion');
    let peticiones = peticionesGuardadas ? JSON.parse(peticionesGuardadas) : [];
  
    // Agregar la nueva peticion a la lista
    peticiones.push(nuevaPeticion);
  
    // Guardar la lista actualizada de peticiones
    localStorage.setItem('peticion', JSON.stringify(peticiones));
  }

  peticion: any;
  
  verPeticiones() {
    const peticionGuardada = localStorage.getItem('peticion');
    if (peticionGuardada != null) {
      this.peticion = JSON.parse(peticionGuardada);
    }
  }
}