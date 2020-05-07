import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  estado : any;
  constructor( private _service : AutenticacionService, public router : Router) {
  }
  canActivate(){
    if(this.estado = this._service.consultarPermiso()) {   
      console.log('canActivate: Paso Guard');
      return true;
    } else {
      console.log('canActivate: bloqueado por el Guard');
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
