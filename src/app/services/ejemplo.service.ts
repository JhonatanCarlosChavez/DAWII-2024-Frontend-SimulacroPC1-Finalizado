import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ejemplo } from '../models/ejemplo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor(private htpp:HttpClient) { }

  public registraEjemplo(ejemplo:Ejemplo) :Observable<any>{
    return this.htpp.post("http://localhost:8090/url/ejemplo",ejemplo)
  }
}
