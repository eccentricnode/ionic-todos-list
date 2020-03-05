import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';

import { TodosService } from '../services/todos.service';

const { Storage } = Plugins;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  todos = [];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    // this.getTodos();
  }

  getTodos() {
    this.todosService.getTodosStore();
    this.todos = JSON.parse(this.todosService.stringifiedTodos);
  }

  setTodos(todos) {
    this.todosService.todos = todos;
    return this.todosService.setTodoStore();
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  clearTodoStore() {
    this.todosService.clear();
  }

}
