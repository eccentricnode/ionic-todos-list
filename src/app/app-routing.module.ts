import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosListComponent } from './todos-list/todos-list.component';
export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: TodosListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
