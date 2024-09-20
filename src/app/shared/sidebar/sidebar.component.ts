import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  manuItems: any[];

  constructor( private sidebar: SidebarService ) {
    this.manuItems = sidebar.manu
   }

  ngOnInit(): void {
  }

}
