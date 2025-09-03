import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';   //para lidar com dados assíncronos

//decorator marca como serviço para poder injetar em outros components
@Injectable({
  providedIn: 'root'  //parametro indica que vai ser usado uma instancia do service na aplicação inteira
})
export class Api {
  private apiUrl = 'http://localhost:7124/api/bestiario'  

  constructor(private http: HttpClient){ } //método que executa td vez que a instancia é criada

  getPersonagem(): Observable<any[]> {  //injeçao de dependencia, o retorno esperado é um array de objetos mas o certo é ter tipo especifico
    return this.http.get<any[]>(this.apiUrl);
  }
}
