import { Component } from '@angular/core';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent {
  elementoSeleccionado: string | null = null;
  archivoPDF: string = ''; // Inicializa como cadena vacía

  seleccionarElemento(elemento: string) {
    this.elementoSeleccionado = elemento;
    this.archivoPDF = `/assets/images/${elemento.toLowerCase()}.pdf`;
  }

  descargarArchivo() {
    if (this.archivoPDF) {
      const link = document.createElement('a');
      link.href = this.archivoPDF;
      link.download = `${this.elementoSeleccionado}.pdf`;
      link.click();
    }
  }
}