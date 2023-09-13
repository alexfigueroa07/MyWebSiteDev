import { Component } from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  redesSociales = [
    { nombre: 'Instagram', enlace: 'enlace-a-Instagram', icono: 'instagram.png' },
    { nombre: 'Facebook', enlace: 'enlace-a-Facebook', icono: 'facebook.png' },
    { nombre: 'GitHub', enlace: 'enlace-a-GitHub', icono: 'github.png' },
    { nombre: 'YouTube', enlace: 'enlace-a-YouTube', icono: 'youtube.png' }
  ];

  constructor() { }

  abrirRedSocial(enlace: string) {
    window.open(enlace, '_blank');
  }
}