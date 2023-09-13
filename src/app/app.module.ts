import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { DescargasComponent } from './descargas/descargas.component';
import { RedesComponent } from './redes/redes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

//AGREAGOS EL ARREGLO CONSTANTE DE ROUTES CON CADA RUTA, DEJAMOS INICIO COMO DEFAULT
const routes: Routes = [

  { path: 'descargas', component: DescargasComponent },
  { path: '', redirectTo: '/mi-perfil', pathMatch: 'full' }, // Redirección predeterminada
  { path: 'mi-perfil', component: MiPerfilComponent },
  { path: 'redes', component: RedesComponent },
  { path: 'contacto', component: ContactoComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MiPerfilComponent,
    DescargasComponent,
    RedesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
