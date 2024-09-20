import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoAddComponent } from './contrato-add/contrato-add.component';
import { ContratoListComponent } from './contrato-list/contrato-list.component';
import { GerentesAllComponent } from './gerentes-all/gerentes-all.component';
import { UsuariosAllComponent } from './usuarios-all/usuarios-all.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ReportesComponent,
    PerfilComponent,
    ContratoComponent,
    ContratoAddComponent,
    ContratoListComponent,
    GerentesAllComponent,
    UsuariosAllComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ReportesComponent,
    PerfilComponent,
    ContratoComponent,
    ContratoAddComponent,
    ContratoListComponent,
    GerentesAllComponent,
    UsuariosAllComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
