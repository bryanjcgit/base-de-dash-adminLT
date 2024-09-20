import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  manu: any [] = [
    {
      title: 'Ruta',
      icon: 'nav-icon fas fa-copy',
      subMenu: [
        {title: 'Sub ruta 1', url: 'reportes'},       
        {title: 'Sub ruta 2', url: 'contrato-list'},
        {title: 'Sub ruta 3', url: 'contrato-add'},
      ]

    },
    {
      title: 'Ruta 2',
      icon: 'nav-icon fas fa-copy',
      subMenu: [
        {title: 'Sub ruta 1', url: 'gerentes-all'},
        {title: 'Sub ruta 2', url: 'gerentes-all'},
        {title: 'Sub ruta 3', url: 'gerentes-all'},
      ]

    },
    {
      title: 'Ruta 3',
      icon: 'nav-icon fas fa-copy',
      subMenu: [
        {title: 'Sub ruta 1', url: 'usuarios-all'},
        {title: 'Sub ruta 2', url: 'usuarios-all'},
        {title: 'Sub ruta 3', url: 'usuarios-all'},
      ]

    },
  ]

  constructor() { }
}
