import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  stringifiedTodos: string;
  todos = [];

  constructor() { }

  async getTodosStore() {
    const returnedKey = await Storage.get({ key: 'todos' });
    this.stringifiedTodos = JSON.parse(returnedKey.value)
  }

  async setTodoStore() {
    await Storage.set({
      key: 'todos',
      value: JSON.stringify(this.todos)
    });
  }

  async clear() {
    await Storage.clear();
  }
}
