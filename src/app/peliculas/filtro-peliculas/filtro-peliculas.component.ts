import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form! : FormGroup ///SU FUNCION ES LA DECLARACION DE LA VARIABLE QUE DE TIPO FORMGROUP QUE SE INICIALIZA COMO UNDEFINIED O NULL DONDE ! NO VA ESPERARUN VALOR NULO
  //form = FormGroup ///SU FUNCION SOBRE FROMGROUP SOLO ASIGNARA UN OBJETO EN RESUMEN LE ASIGNARA UN VALOR A LA VARIABLE 

  generos = [
    {id: 1, nombre: 'Accion'},
    {id: 2, nombre: 'Drama'},
    {id: 3, nombre: 'Comedia'}
  ];

  peliculas = [
    {titulo: 'Spider-Man: Far From Home', enCines: false, proximosEstrenos:true, generos: [1,2], poster: 'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-176834859-large.jpg'},
    {titulo: 'Moana', enCines: true, proximosEstrenos:false, generos: [3], poster: 'https://static.cinepolis.com/resources/mx/movies/posters/414x603/43908-828856-20230929021050.jpg'},
    {titulo: 'Incepcion', enCines: false, proximosEstrenos:true, generos: [1,3], poster: 'https://mentesenaccion.files.wordpress.com/2011/07/origen-incepcion-cartel.jpg'}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPaliculas(this.form.value);
    
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPaliculas(valores);
        this.escribirParametrosBusquedasEnURL();
      })
  }


  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto : any  = {};

      if (params['titulo']){
        objeto.titulo = params['titulo'];
      }

      if (params['generoId']){
        objeto.generoId = Number (params['generoId'])
      }

      if (params['proximosEstrenos']){
        objeto.proximosEstrenos = params['proximosEstrenos'];
      }

      if (params['enCines']){
        objeto.enCines = params['enCines'];
      }

      this.form.patchValue(objeto);
    }); 
  }


  private escribirParametrosBusquedasEnURL(){
    var queryStrings = [];
    
    var valoresFormulario = this.form.value;
    
    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`)
    }

    if(valoresFormulario.generoId != '0'){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`)
    }

    if (valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }

    if (valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'))
  }



  buscarPaliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1); 
    }
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }
 
  limpiar (){
    this.form.patchValue(this.formularioOriginal);
  }
}
