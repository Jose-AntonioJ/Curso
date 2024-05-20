import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://static.doofinder.com/main-files/uploads/2021/11/Banner-Widget-fixed-ES.png'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {  
      //alert(params['id']);
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor)
  }
}
