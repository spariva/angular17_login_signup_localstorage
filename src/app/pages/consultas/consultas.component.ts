import { Component, OnInit, inject } from '@angular/core';
//import clientes from '../../assets/datos.json';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent{
  // public listaClientes:{id:number, nombre:string, apellido:string}[] = clientes;
  // http = inject(HttpClient);
  // clientes:any = [];
  clientes: any = [
    {"nombre": "AAAAAAAAAAAAAA", "apellido": "perez"},
    {"nombre": "Maria", "apellido": "merlo"},
    {"nombre": "Carlos", "apellido": "perez"},
    {"nombre": "Ana", "apellido": "sanchez"},
    {"nombre": "Pedro", "apellido": "gomez"},
]

  loggedUser: any;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  pintar(){
    console.log(this.clientes);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }
  // ngOnInit(): void {
  //     this.fetchClientes();
  // }

  // fetchClientes(){
  //   this.http.get('http://localhost:3001/consultas')
  //   .subscribe((clientes: any) =>{
  //     console.log(clientes);
  //     this.clientes = clientes;
  //   })
  // }
}

// import { CommonModule, NgFor } from '@angular/common';
// import { Component, OnInit, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-consultas',
//   templateUrl: './consultas.component.html',
//   styleUrl: './consultas.component.css'
// })
// export class ConsultasComponent implements OnInit{

//   http = inject(HttpClient);
//   clientes:any = [];
//   mostrar = false;
  
//   ngOnInit(): void {
//       this.fetchClientes();
//   }

//   fetchClientes(){
//     this.http.post('http://localhost:3001/cliente', {id:1})
//     .subscribe((clientes: any) =>{
//       console.log(clientes);
//       // this.clientes = clientes;
//       if(typeof this.clientes == "object" ){
//         this.clientes = clientes;
//         console.log(typeof this.clientes);
//         console.log(this.clientes.length)
//       }    
//     })
//   }
// }