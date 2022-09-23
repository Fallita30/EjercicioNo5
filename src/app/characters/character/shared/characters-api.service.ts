import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  
  //Se hace una conexión con la api de Marvel desde este servivicio.
  PUBLIC_KEY = '4a42beceb2ad1a0ce7cc6ef8381782aa';
  HASH = '';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=4a42beceb2ad1a0ce7cc6ef8381782aa`;

  constructor(private http:HttpClient) { }
  getAllCharacters (): Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) =>data.data.results))
  }

}
