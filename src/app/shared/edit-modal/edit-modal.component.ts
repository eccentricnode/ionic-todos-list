import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  selectedTodo;
  submittedValue;

  @Input() form: FormGroup;
  @Input() set todo(value) {
    this.selectedTodo = value;
    if (!value) return;
    this.form.patchValue({
      id: value.id,
      name: value.name,
      description: value.description
    });
  }

  constructor(
    public modalController: ModalController,
  ) { }


  submit(directive: NgForm) {
    this.submittedValue = this.form.value;
    console.log(this.submittedValue);
    this.modalController.dismiss(this.submittedValue);
  }

  cancel() {
    this.form.reset();
  }

  validateField(control: string, directive: NgForm) {
    return this.form.get(control).invalid && directive.submitted;
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
