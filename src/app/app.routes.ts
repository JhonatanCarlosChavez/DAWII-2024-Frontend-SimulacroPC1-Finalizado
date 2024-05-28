import { Routes } from '@angular/router';
import { AddEjemploComponent } from './components/add-ejemplo/add-ejemplo.component';
import { AddEditorialComponent } from './components/add-editorial/add-editorial.component';

export const routes: Routes = [
    { path: '', component: AddEjemploComponent },
    { path: 'registroEditorial', component: AddEditorialComponent}
];
