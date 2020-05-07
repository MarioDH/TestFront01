import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import { PaginaprotegidaComponent } from './paginaprotegida/paginaprotegida.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AutenticacionGuard } from './Services/autenticacion.guard';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Empleados', component: EmpleadosComponent },
  { path: 'Grupos', component: GruposComponent },
  { path: 'Protegida', component: PaginaprotegidaComponent,
    canActivate: [AutenticacionGuard] },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
