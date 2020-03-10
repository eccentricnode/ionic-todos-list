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

  todos;

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
        form: this.form
      }
    });

    // grabs form value from modal, on modal dismiss
    modal.onWillDismiss()
      .then((data) => {
        this.todos = data;
      });

    return await modal.present();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

}
