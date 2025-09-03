import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './bestiario/home/home';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  
}
