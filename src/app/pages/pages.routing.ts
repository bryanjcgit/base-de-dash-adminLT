import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoAddComponent } from './contrato-add/contrato-add.component';
import { ContratoListComponent } from './contrato-list/contrato-list.component';
import { GerentesAllComponent } from './gerentes-all/gerentes-all.component';
import { UsuariosAllComponent } from './usuarios-all/usuarios-all.component';



const routes: Routes = [
    { path: 'dashboard', 
      component: PagesComponent,
      children:[
        { path: '',               component: DashboardComponent, data: {titulo: 'Dashboard'} },
        { path: 'reportes',       component: ReportesComponent, data: {titulo: 'Reportes'} },
        { path: 'perfil',         component: PerfilComponent, data: {titulo: 'Perfil'} },
        { path: 'contrato/:id',   component: ContratoComponent, data: {titulo: 'Contrato'} },
        { path: 'contrato-add',   component: ContratoAddComponent, data: {titulo: 'Crear contrato'} },
        { path: 'contrato-list',  component: ContratoListComponent, data: {titulo: 'Contratos'} },
        { path: 'gerentes-all',   component: GerentesAllComponent, data: {titulo: 'Gerentes'} },
        { path: 'usuarios-all',   component: UsuariosAllComponent, data: {titulo: 'Usuarios'} },
        
      ]
    
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
