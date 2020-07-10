import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit {
  @Input() TareasList : string;
  constructor() {
  }
  isDisabled : boolean;


  ngOnInit(): void {
  }
  desactivar(){
    this.isDisabled=true;
  }

}
