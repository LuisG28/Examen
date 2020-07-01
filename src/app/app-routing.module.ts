import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './componets/tareas/tareas.component';
import { NotasComponent } from './componets/notas/notas.component';


const routes: Routes = [
  {path:'tareas', component:TareasComponent},
  {path:'notas', component:NotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
