import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  // Se usa @input para llamar informacion de la clase padre, en este casa para llamar los datos de cada personaje
  @Input()character: any;
  constructor() { }

  ngOnInit(): void {
  }

}
