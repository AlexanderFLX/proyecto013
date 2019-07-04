import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlApi = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get(this.urlApi);
  }

}
