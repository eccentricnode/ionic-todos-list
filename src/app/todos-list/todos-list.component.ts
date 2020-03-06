import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

}
