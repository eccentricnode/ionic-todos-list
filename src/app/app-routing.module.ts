import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosListComponent } from './todos-list/todos-list.component';
export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: TodosListComponent },
    { path: 'newTodo', component: TodoDetailsComponent },
    { path: ':id', component: TodoDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
