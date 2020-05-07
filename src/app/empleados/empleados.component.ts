import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  private urlBase = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/luis_valencia';

  private urlBase2 = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/luis_valencia/getByGroup?id=2';

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'Name', 'Last_Name'];

  //Formulario
  controlFormulario: FormGroup;
  datoGuardado= false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private cdRef: ChangeDetectorRef, private http: HttpClient,private formbuild: FormBuilder) { 

      // Crear reglas de validación de formulario
      this.controlFormulario = this.formbuild.group(
        {
          id: [''],
          name: ['', [Validators.required]],
          last_name: ['', [Validators.required]],
          birthday: ['', [Validators.required]],
        });
  }

  ngOnInit() {

    this.http.get(this.urlBase, this.httpOptions).subscribe((data) => {
      console.log(data);
    },
    () => {
     // console.log('Petición finalizada')
    });

    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i});
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  guardar(){
    const name = this.controlFormulario.controls.name.value;
    const last_name = this.controlFormulario.controls.last_name.value;
    const birthday = this.controlFormulario.controls.birthday.value;
    console.log(name, last_name, birthday);

    const body = {
      name: name,
      last_name: last_name,
      birthday: birthday
    };

    this.http.post(this.urlBase, body ).subscribe((data) => {
      console.log(data);
      this.datoGuardado = true;
      this.limpiarformulario();
    },
    () => {
     // console.log('Petición finalizada')
    });

   
  }

  actualizarLista (){

    this.http.get(this.urlBase2, this.httpOptions).subscribe((data) => {
      console.log(data);
    },
    () => {
     // console.log('Petición finalizada')
    });
  }

  limpiarformulario(){
    this.controlFormulario.reset({
      id: '',
      name: '',
      last_name: '',
      birthday: ''
    });
  }

}
