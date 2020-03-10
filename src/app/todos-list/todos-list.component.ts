import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { EditModalComponent } from '../shared/edit-modal/edit-modal.component';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  form: FormGroup;

  todos = [];

  ngOnInit() {
    this.initForm();
    console.log(this.todos);
  }

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder
  ) { }

  async generateModal() {
    const modal = await this.modalController.create({
      component: EditModalComponent,
      componentProps: {
        group: this.form
      }
    });

    // grabs form value from modal, on modal dismiss
    modal.onWillDismiss()
      .then((data) => {
        this.submit(data[`data`]);
      });

    return await modal.present();
  }

  selectItem(item) {
    return this.todos.filter(i => i.id === item);
  }

  submit(todo) {
    return (todo.id ? this.updateTodo(todo) : this.createTodo(todo));
  }

  createTodo(todo) {
    console.log(todo);
    const newTodo = this.generateId(todo);
    console.log(newTodo);
    this.todos.push(newTodo);
  }

  updateTodo(todo) {
    console.log(todo);
    this.todos[todo.id - 1] = todo;
  }

  // deleteTodo(todo) {
  //   this.todos.splice([todo.id - 1], 1)
  // }

  generateId(todo) {
    return this.todos.length === 0 ? this.makeFirstId(todo) : this.newId(todo);
  }

  makeFirstId(todo) {
    const newTodo = todo;
    newTodo.id = 1;
    return newTodo;
  }

  newId(todo) {
    let findId = this.todos[this.todos.length - 1].id;
    todo.id = ++findId;
    return todo;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

}
