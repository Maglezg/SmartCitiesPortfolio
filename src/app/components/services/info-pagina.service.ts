import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {  

  }
  public getinfoPag(){
    return this.http.get('assets/data/infoPagina.json');

  }

public getDatosEquipo(){
  return this.http.get('https://portfolio-uab-default-rtdb.firebaseio.com/equipo/equipo.json');
}

}
