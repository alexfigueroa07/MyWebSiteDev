import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
      console.log('Formulario válido:', this.contactoForm.value);
    } else {
      // El formulario es inválido, muestra mensajes de error o realiza otras acciones
      console.log('Formulario inválido');
    }
  }

  resetForm() {
    // Limpia todos los campos del formulario
    this.contactoForm.reset();
  }
}