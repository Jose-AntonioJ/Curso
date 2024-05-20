import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  ngOnInit(): void {
    this.peliculasEnCines = [{
      titulo: 'Spider-man',
      fechaLanzamiento: new Date,
      precio: 1400.99,
      poster: 'https://play-lh.googleusercontent.com/xYxakoygCm0UPG5WhwNlit5HWEBdKoJi6o5wWmQL1XSRxiGxu_TtsoxQOdrKuYHGy6Y=w240-h480-rw'
    },
    {
      titulo: 'Moana',
      fechaLanzamiento: new Date(2026 - 10 -5),
      precio: 300.99,
      poster: 'https://play-lh.googleusercontent.com/ECIYR1ZonMdi5TRn8WZjpUeTMgdGCDUGq9QSv8-bkD8T-txovfMt5il7V25guIApTQWR=w240-h480-rw'
    }]
}
  peliculasEnCines: { titulo: string; fechaLanzamiento: Date; precio: number; poster: string; }[] = [];
peliculasProximosEstrenos = [];
}
