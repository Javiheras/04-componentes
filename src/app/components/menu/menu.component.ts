import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

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
    },
    {
      icono: 'list-box',
      nombre: 'Card',
      enlace: '/card'
    }
  ];

  constructor() { }

  ngOnInit() {}

}

interface LinkItem {
  icono: string;
  nombre: string;
  enlace: string;
}
