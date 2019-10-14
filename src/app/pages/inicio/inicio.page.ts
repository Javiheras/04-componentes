import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
    },
    {
      icono: 'list-box',
      nombre: 'Card',
      enlace: '/card'
    }
  ];

  constructor( private menuCtrl: MenuController ) { }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

}

interface LinkItem {
  icono: string;
  nombre: string;
  enlace: string;
}