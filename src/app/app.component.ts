import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'proyecto013';

  public usuarios = null;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.retornar().subscribe(
      respuesta => this.usuarios = respuesta,
      error => console.log('Error: ' + error),
      () => console.log('Se completó la petición ;)')
    );
  }

}
