import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private caracter: CharactersApiService) { }
  
  allCharacters!: Observable<any>;
  ngOnInit(): void {
    this.getCaracter();
  }
  //Metodo para contruir la caracterización de los elementos asar
  getCaracter() {
    this.allCharacters = this.caracter.getAllCharacters();
  }
}
