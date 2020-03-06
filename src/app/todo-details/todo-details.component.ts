import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  submit(directive: NgForm) {
    
    directive.resetForm();
  }

  cancel() {
    this.form.reset();
  }

  // validateField(control: string, directive: NgForm) {
  //   return this.form.get(control).invalid && directive.submitted;
  // }

  determineUpdate() {
    return !!this.form.value.id;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }
}
