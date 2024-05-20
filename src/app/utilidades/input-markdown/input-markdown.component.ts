import { Component, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrl: './input-markdown.component.css'
})
export class InputMarkdownComponent implements OnInit{

  contenidoMarkdown = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  inputTextArea(texto: string){
    this.contenidoMarkdown = texto;

  }
  
}
