import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  loggedUser: any;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  clientes: any = [];

  verClientes(){
    console.log('pintarClientes');
    const localClientes = localStorage.getItem('clientes');
    this.clientes = JSON.parse(localClientes as string);
  }
}