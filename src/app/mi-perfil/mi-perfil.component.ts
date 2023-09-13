import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  mostrarAcademica: boolean = true; // Mostrar información académica por defecto
  mostrarLaboral: boolean = false;
  mostrarPersonal: boolean = false;
}
