import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { TodosListComponent } from 'src/app/todos-list/todos-list.component';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  foo;
  bar;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(`${this.foo} ${this.bar}`);
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
