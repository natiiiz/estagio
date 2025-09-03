import { Component} from '@angular/core';
import { Api } from '../api';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem',
  imports: [ CommonModule, RouterOutlet],
  templateUrl: './listagem.html',
  styleUrl: './listagem.css'
})

export class Listagem { 
  //chama o método pra pegar a lista de bichos
  // A variável que vai guardar os dados que o serviço retorna
  bestiario$!: Observable<any[]>;

  //injeta o serviço aqui
  constructor(private bestiarioService: Api) { } 
  
  ngOnInit(): void {
    // Chama o método getPersonagem do serviço para pegar os bihos
    this.bestiario$ = this.bestiarioService.getPersonagem();
  }

}
