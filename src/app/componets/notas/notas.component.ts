import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas : Array<string>=[];
  fecha : Date;
  constructor(
    private _builder : FormBuilder
  ) { 
    this.NotasForm=this._builder.group({
      titulo: ['', Validators.required],
      desc:['', Validators.required]
    })
  }
  NotasForm: FormGroup
  ngOnInit(): void {
  }
  agrnotas(values){
    this.fecha= new Date;
    this.notas.push(values);
    this.NotasForm.reset();
    console.log(this.notas);
  }
}
