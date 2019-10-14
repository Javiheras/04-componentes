import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  linkItems: LinkItem[] = [
    {
      icono: 'alert',
      nombre: 'Alerta',
      enlace: '/alert'
    },
    {
      icono: 'logo-buffer',
      nombre: 'Action Sheet',
      enlace: '/action-sheet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface LinkItem {
  icono: string;
  nombre: string;
  enlace: string;
}