import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent implements OnInit{

  http = inject(HttpClient);
  clientes:any = [];
  mostrar = false;
  
  ngOnInit(): void {
      this.fetchClientes();
  }

  fetchClientes(){
    this.http.post('http://localhost:3001/cliente', {id:1})
    .subscribe((clientes: any) =>{
      console.log(clientes);
      // this.clientes = clientes;
      if(typeof this.clientes == "object" ){
        this.clientes = clientes;
        console.log(typeof this.clientes);
        console.log(this.clientes.length)
      }    
    })
  }
}