import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Notas} from '../../model/tareas'
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit{
  tareas : Array<string>=[];
  isDisabled : boolean;
  ar:Array<Notas>=[];

  constructor(private _builder: FormBuilder) { this.tareasForm = this._builder.group({
    Tarea:['', Validators.required],
    check :[]
    })}
  tareasForm: FormGroup
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('arreglo'))){
      this.cargar();
    }
  }

  add(values){
    this.ar.push(values);
    localStorage.setItem('arreglo', JSON.stringify(this.ar));
    this.tareasForm.reset();
    console.log(this.ar);
    
  }
  Eliminar(){
    this.ar=[];
    localStorage.removeItem('arreglo');
  }

  cargar(){
    this.ar= JSON.parse(localStorage.getItem( 'arreglo'));
  }
  
  desactivar(numero){
    for (let index = 0; index < this.ar.length; index++) {
      let tarea = index;
      if(tarea == numero){
        this.ar[tarea].check  = true ;
        localStorage.setItem('arreglo', JSON.stringify(this.ar));
      }
    }
  }
  
}
