import { Routes } from '@angular/router';
import { Formulario } from './bestiario/formulario/formulario';
import { Listagem } from './bestiario/listagem/listagem';
import { Home } from './bestiario/home/home';


export const routes: Routes = [
    { path: '', component: Home},
    { path: 'bestiario', component: Listagem},
    { path: 'bestiario/formulario', component: Formulario }
];
