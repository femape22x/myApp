import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';
import { Contacto } from './contacto';

@Injectable()
export class FormularioService {

  constructor(private http:Http) { }

  save(Contacto : Contacto) {
    let params = new URLSearchParams();
    let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers : headers});
    params.append("Nombre", Contacto.nombre);
    this.http.post("localhost:4200", params.toString(), options);
  }
}