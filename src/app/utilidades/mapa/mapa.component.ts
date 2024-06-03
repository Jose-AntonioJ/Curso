import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, icon } from 'leaflet';
import { Coordenada } from './cordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit{

  constructor() { }

  @Input()
  cordenadasIniciales: Coordenada[] = [];


  @Output()
  cordenadaSeleccionada = EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas = this.cordenadasIniciales.map((valor) =>
    marker([valor.latitud, valor.longitud])
  );
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(19.43031893494752, -99.13358688354492)
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent){
    const latitud= event.latlng.lat;
    const longitud= event.latlng.lng;
    console.log({latitud, longitud});

    this.capas = [];
    this.capas.push(marker([latitud, longitud], {
      icon: icon({
        iconSize: [25,41],
        iconAnchor: [13,41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    this.cordenadaSeleccionada.emit({ latitud: latitud, longitud: longitud });
  }

}
