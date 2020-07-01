import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componets/nav/nav.component';
import { TareasComponent } from './componets/tareas/tareas.component';
import { NotasComponent } from './componets/notas/notas.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TareasListComponent } from './componets/tareas-list/tareas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TareasComponent,
    NotasComponent,
    TareasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
