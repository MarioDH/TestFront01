import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private paginaProtegida = false;

  constructor() { }

  quitarPermisos() {
    this.paginaProtegida = false;
  }

  agregarPermisos() {
    this.paginaProtegida = true;
  }

  consultarPermiso() {
    return this.paginaProtegida;
  }
}
