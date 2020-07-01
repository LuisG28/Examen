import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas : Array<string>=[];

  constructor(
    private _builder: FormBuilder
  ) { this.tareasForm = this._builder.group({
    Tarea:['', Validators.required]
     })
    }
  tareasForm: FormGroup
  ngOnInit(): void {
  }

  add(values){
    this.tareas.push(values);
    this.tareasForm.reset();
    
  }
  Eliminar(){
    this.tareas=[];
  }

}
