import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

import { EditModalComponent } from '../shared/edit-modal/edit-modal.component';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit{
  @Input() todos;
  @Output() deleted = new EventEmitter();

  ngOnInit() { }

  constructor(
    private router: Router,
    public modalController: ModalController
  ) { }

  async generateModal() {
    const modal = await this.modalController.create({
      component: EditModalComponent,
      componentProps: {
        foo: 'hello',
        bar: 'world'
      }
    });
    return await modal.present();
  }

}
