import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cines';
import { Coordenada } from '../../utilidades/mapa/cordenada';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css'
})
export class FormularioCineComponent implements OnInit{

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup<any>;

  @Input()
  modelo?: cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  cordenadaInicial: Coordenada [] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitud: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      longitud: [
        '',
        {
          validators: [Validators.required]
        }
      ]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.cordenadaInicial.push({latitud:this.modelo.latitud, longitud:this.modelo.longitud});
    }
  }

  cordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }
  

  Onsubmit(){
    this.guardarCambios.emit(this.form.value);
  }

}
