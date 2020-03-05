import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodosComponent },
    { path: 'details', component: TodoDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
